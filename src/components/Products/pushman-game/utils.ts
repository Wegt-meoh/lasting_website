import { GraphCellNumberType } from "./constants"

//box-size=border-box and begin point at left top of border
function drawRectBorder(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, lineWidth: number, color: string): void {
    context.lineWidth = lineWidth
    context.strokeStyle = color
    context.strokeRect(x + context.lineWidth / 2, y + context.lineWidth / 2, w - context.lineWidth, h - context.lineWidth)
}

function tupleAdd(a: [number, number], b: [number, number]): [number, number] {
    return [a[0] + b[0], a[1] + b[1]]
}

const XSB2NumberMap: { [index: string]: GraphCellNumberType } = {
    '@': 2,
    '+': 6,
    '$': 4,
    '*': 5,
    '#': 0,
    '.': 3,
    ' ': 1,
    '-': 1,
    '_': 1,
}

function XSB2Number(data: string, w: number): GraphCellNumberType[][] {
    if (data.length % w !== 0) return []
    let XSBArray: GraphCellNumberType[][] = []
    let t: GraphCellNumberType[] = []
    for (let i = 1; i <= data.length; i++) {
        t.push(XSB2NumberMap[data[i - 1]])
        if (i % w === 0) {
            XSBArray.push(t)
            t = []
        }
    }
    return XSBArray
}

class PushBoxLocalStorageHandler {
    static saveFinishedLevel(data: { [index: number]: boolean }) {
        localStorage.setItem('finishedLevel', JSON.stringify(data))
    }

    static getFinishedLevel(): { [index: number]: boolean } {
        if (localStorage.getItem('finishedLevel') === null) return {}
        return JSON.parse(localStorage.getItem('finishedLevel')!)
    }
}

export { drawRectBorder, tupleAdd, XSB2Number, PushBoxLocalStorageHandler }