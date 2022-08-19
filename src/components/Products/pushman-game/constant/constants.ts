// constants
type Tuple = [number, number];

type Direction2StringType = "up" | "left" | "down" | "right";

interface Rect {
    beginPoint: Tuple
    width: number
    height: number
}

const direction2TupleMap: { [k in Direction2StringType]: [number, number] } = {
    up: [0, -1],
    left: [-1, 0],
    down: [0, 1],
    right: [1, 0]
};

const enum GraphCellEnum {
    "wall" = 0,
    "road" = 1,
    "player" = 2,
    "goal" = 3,
    "box" = 4,
    "boxOnGoal" = 5,
    "playerOnGoal" = 6
}

type GraphCellNumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export { type Direction2StringType, type Tuple, type Rect, direction2TupleMap, GraphCellEnum, type GraphCellNumberType };
