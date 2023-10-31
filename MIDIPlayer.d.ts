export class MIDIPlayer {
    play(): void
    pause(): void
    seek(sec: number): void
    load(midiURL: string): Promise<void>
}

export function createMIDIPlayer(baseURL?: string, acontext?: AudioContext): Promise<MIDIPlayer>
