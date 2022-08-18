/**
 * 音频文件和音名的映射
 */
const fileToKeyMap: {[index: string]: {url: string, isPlay: boolean}} = {
    A2: { url: "a54", isPlay: false },
    A3: { url: "a69", isPlay: false },
    A4: { url: "a80", isPlay: false },
    A5: { url: "a74", isPlay: false },
    A6: { url: "a66", isPlay: false },
    "A#3": { url: "b69", isPlay: false },
    "A#4": { url: "b80", isPlay: false },
    "A#5": { url: "b74", isPlay: false },
    "A#6": { url: "b66", isPlay: false },
    B2: { url: "a55", isPlay: false },
    B3: { url: "a82", isPlay: false },
    B4: { url: "a65", isPlay: false },
    B5: { url: "a75", isPlay: false },
    B6: { url: "a78", isPlay: false },
    C2: { url: "a49", isPlay: false },
    C3: { url: "a56", isPlay: false },
    C4: { url: "a84", isPlay: false },
    C5: { url: "a83", isPlay: false },
    C6: { url: "a76", isPlay: false },
    C7: { url: "a77", isPlay: false },
    "C#2": { url: "b49", isPlay: false },
    "C#3": { url: "b56", isPlay: false },
    "C#4": { url: "b84", isPlay: false },
    "C#5": { url: "b83", isPlay: false },
    "C#6": { url: "b76", isPlay: false },
    D2: { url: "a50", isPlay: false },
    D3: { url: "a57", isPlay: false },
    D4: { url: "a89", isPlay: false },
    D5: { url: "a68", isPlay: false },
    D6: { url: "a90", isPlay: false },
    "D#2": { url: "b50", isPlay: false },
    "D#3": { url: "b57", isPlay: false },
    "D#4": { url: "b89", isPlay: false },
    "D#5": { url: "b68", isPlay: false },
    "D#6": { url: "b90", isPlay: false },
    E2: { url: "a51", isPlay: false },
    E3: { url: "a48", isPlay: false },
    E4: { url: "a85", isPlay: false },
    E5: { url: "a70", isPlay: false },
    E6: { url: "a88", isPlay: false },
    F2: { url: "a52", isPlay: false },
    F3: { url: "a81", isPlay: false },
    F4: { url: "a73", isPlay: false },
    F5: { url: "a71", isPlay: false },
    F6: { url: "a67", isPlay: false },
    "F#2": { url: "b52", isPlay: false },
    "F#3": { url: "b81", isPlay: false },
    "F#4": { url: "b73", isPlay: false },
    "F#5": { url: "b71", isPlay: false },
    "F#6": { url: "b67", isPlay: false },
    G2: { url: "a53", isPlay: false },
    G3: { url: "a87", isPlay: false },
    G4: { url: "a79", isPlay: false },
    G5: { url: "a72", isPlay: false },
    G6: { url: "a86", isPlay: false },
    "G#2": { url: "b53", isPlay: false },
    "G#3": { url: "b87", isPlay: false },
    "G#4": { url: "b79", isPlay: false },
    "G#5": { url: "b72", isPlay: false },
    "G#6": { url: "b86", isPlay: false }
};

/**
 * 获取音频文件和音名的映射
 */
export function getFileToKeyMap () {
    return fileToKeyMap;
}
