import deepClone from "../../../../utils/deepClone";
import { direction2TupleMap, Direction2StringType, GraphCellEnum, Tuple, Rect } from "../constant/constants";
import { getGraphData } from "../data/graph.data";
import { drawRectBorder, getFinishedLevel, pointInRect, saveFinishedLevel, tupleAdd } from "../utils/utils";

// param
const unitSize = 40;
const lineWidth = 5;
const radius = unitSize / 2 * 0.8;
const goalRadius = unitSize / 2 * 0.4;
const bgColor = "#bdbdbd";
const wallStrockColor = "#5f5f58";
const boxStrockColor = "#7e7515";
const goalFillColor = "#ff0000";
const playerOnGoalFillColor = "#ff0000";
const playerFillColor = "#0000ff";
const boxOnGoalFillColor = "#ff0000";
const boxOnGoalStorckColor = "#7e7515";

export default class PushBox {
    level: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    graphStack: number[][][];
    finishedLevel: { [index: number]: boolean };
    constructor (level: number, canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        if (this.canvas.getContext("2d") !== null) {
            this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        } else {
            throw new Error("CanvasRenderingContext2D is null");
        }
        this.finishedLevel = getFinishedLevel();
        this.level = level;
        this.graphStack = [];
        this.graphStack.push(getGraphData(level));
        this.canvas.width = this.graphStack[0][0].length * unitSize;
        this.canvas.height = this.graphStack[0].length * unitSize;
        this.render();
    }

    loadLevel (level: number) {
        this.level = level;
        this.graphStack = [];
        this.graphStack.push(getGraphData(level));
        this.canvas.width = this.graphStack[0][0].length * unitSize;
        this.canvas.height = this.graphStack[0].length * unitSize;
        this.render();
    }

    /**
     * 撤销上一步
     * @returns void
     */
    back (): void {
        if (this.graphStack.length <= 1) return;
        this.graphStack.pop();
        this.render();
    }

    paintCell (x: number, y: number, what: number) {
        switch (what) {
            case GraphCellEnum.road:
                // before paint cell,have painted all the cells road color
                break;

            case GraphCellEnum.goal:
                this.context.fillStyle = goalFillColor;
                this.context.beginPath();
                this.context.arc(x * unitSize + unitSize / 2, y * unitSize + unitSize / 2, goalRadius, 0, Math.PI * 2);
                this.context.closePath();
                this.context.fill();
                break;
            case GraphCellEnum.wall:
                drawRectBorder(
                    this.context, x * unitSize, y * unitSize,
                    unitSize, unitSize, lineWidth, wallStrockColor);
                break;
            case GraphCellEnum.box:
                drawRectBorder(
                    this.context, x * unitSize, y * unitSize,
                    unitSize, unitSize, lineWidth, boxStrockColor);
                break;
            case GraphCellEnum.boxOnGoal: {
                const w = unitSize - 2 * lineWidth;
                drawRectBorder(
                    this.context, x * unitSize, y * unitSize,
                    unitSize, unitSize, lineWidth, boxOnGoalStorckColor);
                this.context.fillStyle = boxOnGoalFillColor;
                this.context.fillRect(x * unitSize + lineWidth, y * unitSize + lineWidth, w, w);
                break;
            }
            case GraphCellEnum.player:
                this.context.fillStyle = playerFillColor;
                this.context.beginPath();
                this.context.arc(x * unitSize + unitSize / 2, y * unitSize + unitSize / 2, radius, 0, Math.PI * 2);
                this.context.closePath();
                this.context.fill();
                break;
            case GraphCellEnum.playerOnGoal:
                this.context.fillStyle = playerOnGoalFillColor;
                this.context.beginPath();
                this.context.arc(x * unitSize + unitSize / 2, y * unitSize + unitSize / 2, radius, 0, Math.PI * 2);
                this.context.closePath();
                this.context.fill();
                break;
        }
    }

    getPlayerPos (): [number, number] {
        const map = this.graphStack[this.graphStack.length - 1];
        for (let i = 0; i < map?.length; i++) {
            for (let j = 0; j < map[0]?.length; j++) {
                if (map[i][j] === GraphCellEnum.player || map[i][j] === GraphCellEnum.playerOnGoal) {
                    return [j, i];
                }
            }
        }
        throw new Error("function getPlayerPos: can not found player");
    }

    getGraphCellValue (pos: Tuple): number {
        const map = this.graphStack[this.graphStack.length - 1];
        if (map === undefined) {
            alert("function getMapCell: map is undefined");
            throw new Error("function getMapCell: map is undefined");
        }
        return map[pos[1]][pos[0]];
    }

    setGraphCellValue (pos: Tuple, value: number) {
        try {
            const map = this.graphStack.pop();
            if (map === undefined) {
                alert("function setMapCell: map is undefined");
                throw new Error("function setMapCell: map is undefined");
            }
            map[pos[1]][pos[0]] = value;
            this.graphStack.push(map);
        } catch (e) {
            alert("function setMapCell: error");
            throw new Error("function setMapCell: error");
        }
    }

    playerMove (direction: Direction2StringType) {
        const currentPos = this.getPlayerPos();
        const nextPos = tupleAdd(currentPos, direction2TupleMap[direction]);
        switch (this.getGraphCellValue(nextPos)) {
            case GraphCellEnum.wall:
                break;
            case GraphCellEnum.road:
            case GraphCellEnum.goal: {
                const map: number[][] = deepClone(this.graphStack[this.graphStack.length - 1]);
                this.graphStack.push(map);
                this.setGraphCellValue(nextPos, this.getGraphCellValue(nextPos) === GraphCellEnum.road
                    ? GraphCellEnum.player
                    : GraphCellEnum.playerOnGoal);
                this.setGraphCellValue(currentPos,
                    this.getGraphCellValue(currentPos) === GraphCellEnum.playerOnGoal
                        ? GraphCellEnum.goal
                        : GraphCellEnum.road);
                break;
            }
            case GraphCellEnum.box:
            case GraphCellEnum.boxOnGoal:
                if (this.boxMovable(nextPos, direction)) {
                    const map = deepClone(this.graphStack[this.graphStack.length - 1]);
                    this.graphStack.push(map);
                    const next2Pos = tupleAdd(nextPos, direction2TupleMap[direction]);
                    this.setGraphCellValue(next2Pos,
                        this.getGraphCellValue(next2Pos) === GraphCellEnum.goal
                            ? GraphCellEnum.boxOnGoal
                            : GraphCellEnum.box);
                    this.setGraphCellValue(nextPos,
                        this.getGraphCellValue(nextPos) === GraphCellEnum.box
                            ? GraphCellEnum.player
                            : GraphCellEnum.playerOnGoal);
                    this.setGraphCellValue(currentPos,
                        this.getGraphCellValue(currentPos) === GraphCellEnum.playerOnGoal
                            ? GraphCellEnum.goal
                            : GraphCellEnum.road);
                }
                break;
        }
        this.render();
    }

    boxMovable (boxPos: Tuple, direction: Direction2StringType): boolean {
        const nextPos = tupleAdd(boxPos, direction2TupleMap[direction]);
        switch (this.getGraphCellValue(nextPos)) {
            case GraphCellEnum.road:
            case GraphCellEnum.goal:
                return true;
            default:
                return false;
        }
    }

    confirm (level: number, callback: () => any): void {
        const confirmDivWidth = 400;

        // make canvas width big enough
        this.canvas.width = Math.max(this.canvas.width, confirmDivWidth);
        this.render();

        const textDiv = {
            width: 400,
            height: 60,
            x: 10,
            y: 10,
            backgroundColor: "#4f4f4f",
            fontColor: "#ffffff",
            padding: 8
        };
        const optionDiv = {
            width: textDiv.width / 2,
            height: 60,
            y: textDiv.y + textDiv.height,
            leftX: textDiv.x,
            rightX: textDiv.x + textDiv.width / 2,
            boderColor: "#000000",
            backgroundColor: "#4f4f4f",
            fontOffset: 10
        };

        // make it center
        textDiv.x = this.canvas.width / 2 - textDiv.width / 2;
        textDiv.y = this.canvas.height / 2 - (textDiv.height + optionDiv.height) / 2;
        optionDiv.y = textDiv.y + textDiv.height;
        optionDiv.leftX = textDiv.x;
        optionDiv.rightX = textDiv.x + textDiv.width / 2;

        // text div
        this.context.fillStyle = textDiv.backgroundColor;
        this.context.fillRect(textDiv.x, textDiv.y, textDiv.width, textDiv.height);
        this.context.fillStyle = textDiv.fontColor;
        this.context.font = "16px serif";
        this.context.textBaseline = "top";
        this.context.fillText(`are you sure go to level ${level}?`, textDiv.x + textDiv.padding, textDiv.y + textDiv.padding);
        this.context.fillText("any change that you done will be losed.", textDiv.x + textDiv.padding, textDiv.y + textDiv.padding + 14);

        // left option
        this.context.fillStyle = optionDiv.backgroundColor;
        this.context.fillRect(optionDiv.leftX, optionDiv.y,
            optionDiv.width, optionDiv.height);
        drawRectBorder(this.context,
            optionDiv.leftX, optionDiv.y,
            optionDiv.width, optionDiv.height,
            4, optionDiv.boderColor);
        this.context.fillStyle = textDiv.fontColor;
        this.context.fillText("Yes", optionDiv.leftX + optionDiv.width / 2 - optionDiv.fontOffset, optionDiv.y + optionDiv.height / 2 - optionDiv.fontOffset);

        // right option
        this.context.fillStyle = optionDiv.backgroundColor;
        this.context.fillRect(optionDiv.rightX, optionDiv.y,
            optionDiv.width, optionDiv.height);
        drawRectBorder(this.context,
            optionDiv.rightX, optionDiv.y,
            optionDiv.width, optionDiv.height,
            4, optionDiv.boderColor);
        this.context.fillStyle = textDiv.fontColor;
        this.context.fillText("No", optionDiv.rightX + optionDiv.width / 2 - optionDiv.fontOffset, optionDiv.y + optionDiv.height / 2 - optionDiv.fontOffset);

        // add listener
        const listener = (ev: MouseEvent) => {
            const { offsetTop, offsetLeft } = this.canvas;
            // 实时获取参数避免监听window resize
            const point: Tuple = [ev.clientX, ev.clientY];
            const leftOption: Rect = {
                beginPoint: [offsetLeft + optionDiv.leftX, offsetTop + optionDiv.y],
                width: optionDiv.width,
                height: optionDiv.height
            };
            const rightOption: Rect = {
                beginPoint: [offsetLeft + optionDiv.rightX, offsetTop + optionDiv.y],
                width: optionDiv.width,
                height: optionDiv.height
            };

            if (pointInRect(point, leftOption)) {
                callback();
                this.canvas.removeEventListener("click", listener);
                this.canvas.removeEventListener("mousemove", moveListener);
            } else if (pointInRect(point, rightOption)) {
                this.render();
                this.canvas.removeEventListener("click", listener);
                this.canvas.removeEventListener("mousemove", moveListener);
            }
        };

        const moveListener = (ev: MouseEvent) => {
            const { offsetTop, offsetLeft } = this.canvas;
            // 实时获取参数避免监听window resize
            const point: Tuple = [ev.clientX, ev.clientY];
            const leftOption: Rect = {
                beginPoint: [offsetLeft + optionDiv.leftX, offsetTop + optionDiv.y],
                width: optionDiv.width,
                height: optionDiv.height
            };
            const rightOption: Rect = {
                beginPoint: [offsetLeft + optionDiv.rightX, offsetTop + optionDiv.y],
                width: optionDiv.width,
                height: optionDiv.height
            };
            if (pointInRect(point, leftOption) || pointInRect(point, rightOption)) {
                this.canvas.style.cursor = "pointer";
            } else {
                this.canvas.style.cursor = "default";
            }
        };
        this.canvas.addEventListener("click", listener);
        this.canvas.addEventListener("mousemove", moveListener);
    }

    render () {
        let count = 0;
        const map = this.graphStack[this.graphStack.length - 1];

        // before paint cell,paint all the cells `road` color
        this.context.fillStyle = bgColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 注意这里数组的第一纬对应canvas的y轴
        // 这个循环做了绘图和计数,而计数用于统计没有被箱子覆盖的目标点数量，来判断游戏是否结束
        map?.forEach((row, y) =>
            row.forEach((item, x) => {
                this.paintCell(x, y, item);
                if (item === GraphCellEnum.goal || item === GraphCellEnum.playerOnGoal) {
                    count++;
                }
            }));
        // 游戏结束后的绘图
        if (count === 0) {
            this.success();
        }
    }

    success () {
        const { width, height } = this.canvas;
        this.context.fillStyle = bgColor;
        this.context.fillRect(0, 0, width, height);
        this.context.font = "60px serif";
        this.context.fillStyle = "#ff0000";
        this.context.fillText("success", width / 2 - 80, height / 2);

        this.finishedLevel[this.level] = true;
        saveFinishedLevel(this.finishedLevel);
    }
}
