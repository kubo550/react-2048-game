export type BoardRow = [number, number, number, number];
export type BoardType = BoardRow[];

export type Spot = { x: number; y: number };

export enum Arrows {
    ArrowRight = "ArrowRight",
    ArrowLeft = "ArrowLeft",
    ArrowDown = "ArrowDown",
    ArrowUp = "ArrowUp",
}