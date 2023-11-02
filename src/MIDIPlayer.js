import workerSrc from 'inline-worker:./WorkletProcessor.js'
import { EventEmitter } from 'events'

export class MIDIPlayer extends EventEmitter {
	constructor(worklet, context, baseURL) {
		super()
		this._worklet = worklet
		this._baseURL = baseURL
		this._worklet.port.onmessage = this._handleMessage.bind(this)
		this.context = context
		this._worklet.connect(context.destination)
	}

	async _handleMessage(message) {
		if (message.data.type === 'missingInstruments') {
			let instBuffs = []
			try {
				instBuffs = await Promise.all(message.data.instruments.map((instrument) => {
					return this.fetchInstrument(instrument)
				}))
			} catch (err) {
				// Do something
				console.log('Error loading instrument patch files')
				console.log(err)
			}
			this._worklet.port.postMessage({ type: 'instPayload', buffs: instBuffs })
		} else if (message.data === 'loaded') this.emit('song-loaded')
	}

	play() {
		this.context.resume()
		this._worklet.port.postMessage("play")
	}

	pause() {
		this._worklet.port.postMessage("pause")
	}

	seek(sec) {
		this._worklet.port.postMessage({ type: 'seek', sec: sec })
	}

	async load(midiURL) {
		const buff = await fetchBuff(midiURL)
		this._worklet.port.postMessage({
			type: 'loadMIDI',
			midiBuff: buff
		})
		await new Promise((res, rej) => {
			this.on('song-loaded', () => res())
			setTimeout(() => rej('timeout on loading midi song instruments, 10000'), 10000)
		})
	}

	async fetchInstrument(instrument) {
		let path = this._baseURL + instrument
		const extRegex = /(?:\.([^.]+))?$/
		if (extRegex.exec(instrument) !== 'pat') path = this._baseURL + instrument + '.pat'
		return { instrumentName: instrument, instrumentBuff: await fetchBuff(path) }
	}
}


async function fetchBuff(url) {
	const response = await _fetch(url)
	const arrayBuffer = await response.arrayBuffer()
	const buf = new Uint8Array(arrayBuffer)
	return buf
}

export async function fetchText(url) {
	const response = await _fetch(url)
	const text = await response.text()
	return text
}

async function _fetch(url) {
	const response = await window.fetch(url)
	if (response.status !== 200) throw new Error(`Could not load ${url}`)
	return response
}

export default async function createMIDIPlayer(baseURL = '/', cfgFile='gravis.cfg', acontext = new AudioContext()) {
	if (!baseURL.endsWith('/')) baseURL += '/'

	try {
		await acontext.audioWorklet.addModule(workerSrc)
	} catch (err) {
		console.log(err)
	}

	let timidityCfg = cfgFile
	if (!timidityCfg.includes("\n")) {
		timidityCfg = await fetchText(baseURL + cfgFile)
	}
	
	const workletNode = new AudioWorkletNode(acontext, 'timidityplayer', {
		outputChannelCount: [2],
		processorOptions: {
			baseURL: baseURL,
			timidityCfg: timidityCfg
		}
	})

	return new MIDIPlayer(workletNode, acontext, baseURL)
}
