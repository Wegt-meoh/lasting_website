import deepClone from "../../../utils/deepClone";
import { direction2TupleMap, Direction2StringType, GraphCellEnum, Tuple } from "./constants";
import { getGraphData } from "./mapData";
import { drawRectBorder, getFinishedLevel, saveFinishedLevel, tupleAdd } from "./utils";

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
        if (map === undefined) {
            alert("function getPlayerPos: map is undefined");
            throw new Error("function getPlayerPos: map is undefined");
        }
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] === GraphCellEnum.player || map[i][j] === GraphCellEnum.playerOnGoal) {
                    return [j, i];
                }
            }
        }
        throw new Error("function getPlayerPos: can not found player");
    }

    getGraphCellValue (pos: [number, number]): number {
        try {
            const map = this.graphStack[this.graphStack.length - 1];
            if (map === undefined) {
                alert("function getMapCell: map is undefined");
                throw new Error("function getMapCell: map is undefined");
            }
            return map[pos[1]][pos[0]];
        } catch (e) {
            return -1;
        }
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

    render () {
        let count = 0;
        const map = this.graphStack.pop();
        if (map === undefined) return;
        // before paint cell,have painted all the cells road color
        this.context.fillStyle = bgColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // 注意这里数组的第一纬对应canvas的y轴
        // 这个循环做了绘图和计数用于判断游戏是否结束
        map.forEach((row, y) =>
            row.forEach((item, x) => {
                this.paintCell(x, y, item);
                if (item === GraphCellEnum.goal || item === GraphCellEnum.playerOnGoal) {
                    count++;
                }
            }));
        this.graphStack.push(map);
        // 游戏结束后的绘图
        if (count === 0) {
            this.succ();
        }
    }

    succ () {
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
