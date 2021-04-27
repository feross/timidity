export as namespace "phaser-timidity-plugin";

export = MIDIPlayer

declare class MIDIPlayer {
    static async createMIDIPlayer(cfgURL?: string, acontext?: AudioContext): Promise<MIDIPlayer>
    play(): void
    pause(): void
    seek(sec: number): void
    load(midiURL: string): void
}
