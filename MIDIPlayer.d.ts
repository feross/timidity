declare class MIDIPlayer {
    static createMIDIPlayer(cfgURL?: string, acontext?: AudioContext): Promise<MIDIPlayer>
    play(): void
    pause(): void
    seek(sec: number): void
    load(midiURL: string): Promise<void>
}

export = MIDIPlayer
