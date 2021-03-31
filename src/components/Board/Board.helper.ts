import { BoardType, BoardRow, Spot } from "./Board.types";

const changed = (prev: BoardType, actual: BoardType) =>
    prev.toString() !== actual.toString();

export const matrixArray = (board: BoardType): BoardType =>
    board[0].map((_, colIndex) => board.map(row => row[colIndex])) as BoardType;

export const slideValues = (board: BoardType, forward: boolean, addScore: (score: number) => void) => {
    const newBoard = board.map((row) => {
        let numbers = forward ? row.filter(Boolean) : row.filter(Boolean).reverse();

        if (numbers.length >= 2) {
            // + Adding values here
            for (let i = numbers.length - 1; i > 0; i--) {
                if (numbers[i] === numbers[i - 1]) {
                    numbers[i] += numbers[i - 1];
                    addScore(numbers[i])
                    numbers[i - 1] = 0;
                }
            }
        }
        numbers = forward ? numbers.filter(Boolean) : numbers.filter(Boolean).reverse();

        const zeros = Array(4 - numbers.length).fill(0);
        const newBoard = forward ? [...zeros, ...numbers] : [...numbers, ...zeros];

        return newBoard as BoardRow;
    }) as BoardType;

    if (changed(board, newBoard) && isFreeSpot(newBoard)) {
        return withNewValue(newBoard)

    } else {
        return newBoard
    }

}


const getRandomSpot = (spots: Spot[]): Spot => {
    const idx = Math.floor(Math.random() * spots.length);
    return spots[idx];
};

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

const isFreeSpot = (b: BoardType): Boolean => {
    return b.some(row => row.some(cell => cell === 0))
}