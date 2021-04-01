import { BoardType, BoardRow, Spot, Arrows } from "./Board.types";

const getRandomSpot = (spots: Spot[]): Spot => {
    const idx = Math.floor(Math.random() * spots.length);
    return spots[idx];
};

const matrixArray = (board: BoardType): BoardType =>
    board[0].map((_, colIndex) => board.map(row => row[colIndex])) as BoardType;

const slideValues = (board: BoardType, forward: boolean, addScore?: (score: number) => void) => {
    return board.map((row) => {
        let numbers = forward ? row.filter(Boolean) : row.filter(Boolean).reverse();

        if (numbers.length >= 2) {
            // + Adding values here
            for (let i = numbers.length - 1; i > 0; i--) {
                if (numbers[i] === numbers[i - 1]) {
                    numbers[i] += numbers[i - 1];
                    numbers[i - 1] = 0;
                    addScore && addScore(numbers[i])
                }
            }
        }
        numbers = forward ? numbers.filter(Boolean) : numbers.filter(Boolean).reverse();

        const zeros = Array(4 - numbers.length).fill(0);
        const newBoard = forward ? [...zeros, ...numbers] : [...numbers, ...zeros];

        return newBoard as BoardRow;
    }) as BoardType;
}



export const changed = (prev: BoardType, actual: BoardType) =>
    prev.toString() !== actual.toString();

export const withNewValue = (board: BoardType): BoardType => {
    const freeSpots: Spot[] = [];

    board.forEach((row, y) =>
        row.forEach((cell, x) => {
            if (!cell) {
                freeSpots.push({ x, y });
            }
        })
    );

    const { x, y } = getRandomSpot(freeSpots);
    board[y][x] = 2;
    return board;
};


export const hasPossibilities = (board: BoardType): Boolean => {
    const dirs = Object.values(Arrows)
    const swipedBoards = dirs.map(dir => swap.get(dir)!(board))
    return swipedBoards.some(b => changed(board, b))
}

export const countScore = (prevScore: number, board: BoardType) => {
    // change to Array.reduce
    let score = 0;
    board.forEach(row => row.forEach(val => score += val))
    return score - prevScore
}

// prettier-ignore
export const swap = new Map<Arrows, (board: BoardType, addScore?: (score: number) => void) => BoardType>([
    [Arrows.ArrowRight, (prev: BoardType, addScore) => slideValues(prev, true, addScore)],
    [Arrows.ArrowLeft, (prev: BoardType, addScore) => slideValues(prev, false, addScore)],
    [Arrows.ArrowDown, (prev: BoardType, addScore) => matrixArray(slideValues(matrixArray(prev), true, addScore))],
    [Arrows.ArrowUp, (prev: BoardType, addScore) => matrixArray(slideValues(matrixArray(prev), false, addScore))]
]);
