import { GraphCellNumberType, Rect, Tuple } from "../constant/constants";

// box-size=border-box and begin point at left top of border
function drawRectBorder (context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, lineWidth: number, color: string): void {
    const { lineWidth: _lineWidth } = context;
    const { strokeStyle: _strokeStyle } = context;
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.strokeRect(x + context.lineWidth / 2, y + context.lineWidth / 2, w - context.lineWidth, h - context.lineWidth);

    context.lineWidth = _lineWidth;
    context.strokeStyle = _strokeStyle;
}

function tupleAdd (a: [number, number], b: [number, number]): [number, number] {
    return [a[0] + b[0], a[1] + b[1]];
}

function pointInRect (point: Tuple, rect: Rect): boolean {
    const { beginPoint, width, height } = rect;
    const endPoint = [beginPoint[0] + width, beginPoint[1] + height];
    if (point[0] >= beginPoint[0] && point[1] >= beginPoint[1] && point[0] <= endPoint[0] && point[1] <= endPoint[1]) return true;
    return false;
}

const XSB2NumberMap: { [index: string]: GraphCellNumberType } = {
    "@": 2,
    "+": 6,
    $: 4,
    "*": 5,
    "#": 0,
    ".": 3,
    " ": 1,
    "-": 1,
    _: 1
};

function XSB2Number (data: string, w: number): GraphCellNumberType[][] {
    if (data.length % w !== 0) return [];
    const XSBArray: GraphCellNumberType[][] = [];
    let t: GraphCellNumberType[] = [];
    for (let i = 1; i <= data.length; i++) {
        t.push(XSB2NumberMap[data[i - 1]]);
        if (i % w === 0) {
            XSBArray.push(t);
            t = [];
        }
    }
    return XSBArray;
}

function saveFinishedLevel (data: { [index: number]: boolean }) {
    localStorage.setItem("finishedLevel", JSON.stringify(data));
}

function getFinishedLevel (): { [index: number]: boolean } {
    if (localStorage.getItem("finishedLevel") === null) return {};
    const result = localStorage.getItem("finishedLevel");
    if (result === null) {
        return {};
    } else {
        return JSON.parse(result);
    }
}
export { pointInRect, drawRectBorder, tupleAdd, XSB2Number, saveFinishedLevel, getFinishedLevel };
