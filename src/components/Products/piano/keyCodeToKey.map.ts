/**
 * 键盘输入和音名的映射
 */
const keycodeToKey: {[index: string]: string} = {
    KeyZ: "C3",
    KeyX: "D3",
    KeyC: "E3",
    KeyV: "F3",
    KeyB: "G3",
    KeyN: "A3",
    KeyM: "B3",
    KeyS: "C#3",
    KeyD: "D#3",
    KeyG: "F#3",
    KeyH: "G#3",
    KeyJ: "A#3",

    KeyQ: "C4",
    KeyW: "D4",
    KeyE: "E4",
    KeyR: "F4",
    KeyT: "G4",
    KeyY: "A4",
    KeyU: "B4",
    Digit2: "C#4",
    Digit3: "D#4",
    Digit5: "F#4",
    Digit6: "G#4",
    Digit7: "A#4",

    KeyI: "C5",
    KeyO: "D5",
    KeyP: "E5",
    "[": "F5",
    "]": "G5",
    "\\": "A5",
    // u: "B5",
    Digit9: "C#5",
    Digit0: "D#5",
    "=": "F#5"
    // 6: "G#5",
    // 7: "A#5"
};

/**
 * 根据键盘输入获取音名
 * @Param code 键盘输入编码比如KeyJ
 */
function getKeyName (code: string): string | undefined {
    return keycodeToKey[code];
}

export { getKeyName };
