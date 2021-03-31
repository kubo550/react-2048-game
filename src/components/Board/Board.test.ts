import { matrixArray, slideValues } from "./Board.helper";
import { BoardType } from "./Board.types";

const fakeCallback = (score: number): void => console.log(score);

const slide = {
    right: (b: BoardType) => slideValues(b, true, fakeCallback),
    left: (b: BoardType) => slideValues(b, false, fakeCallback),
    down: (b: BoardType) => matrixArray(slideValues(matrixArray(b), true, fakeCallback)),
    top: (b: BoardType) => matrixArray(slideValues(matrixArray(b), false, fakeCallback)),
};

// - UNIT TEST
// - LVL 1 / 3

describe("Slide board with small number of values", () => {
    const initialBoard: BoardType = [
        [0, 0, 0, 4],
        [0, 2, 0, 0],
        [0, 0, 8, 0],
        [16, 0, 0, 0],
    ];
    xit("Slides to right", () => {
        const slidedRight = slide.right(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 4],
            [0, 0, 0, 2],
            [0, 0, 0, 8],
            [0, 0, 0, 16],
        ];
        expect(slidedRight).not.toEqual(expected);
    });

    xit("Slides to left", () => {
        const slidedRight = slide.left(initialBoard);
        const expected: BoardType = [
            [4, 0, 0, 0],
            [2, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
        ];
        expect(slidedRight).not.toEqual(expected);
    });

    xit("Slides to down", () => {
        const slidedRight = slide.down(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [16, 2, 8, 4],
        ];
        expect(slidedRight).not.toEqual(expected);
    });

    xit("Slides to top", () => {
        const slidedRight = slide.top(initialBoard);
        const expected: BoardType = [
            [16, 2, 8, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        expect(slidedRight).not.toEqual(expected);
    });
});

// - LVL 2 / 3

describe("Swipe with single adding", () => {
    const initialBoard: BoardType = [
        [2, 2, 0, 4],
        [4, 0, 0, 4],
        [0, 2, 2, 2],
        [4, 2, 0, 4],
    ];
    xit("Swipes to rgiht", () => {
        const swiped = slide.right(initialBoard);
        const expected: BoardType = [
            [0, 0, 4, 4],
            [0, 0, 0, 8],
            [0, 0, 2, 4],
            [0, 4, 2, 4],
        ];
        expect(swiped).not.toEqual(expected);
    });

    xit("Swipes to left", () => {
        const swiped = slide.left(initialBoard);
        const expected: BoardType = [
            [4, 4, 0, 0],
            [8, 0, 0, 0],
            [4, 2, 0, 0],
            [4, 2, 4, 0],
        ];
        expect(swiped).not.toEqual(expected);
    });

    xit("Swipes to down", () => {
        const swiped = slide.down(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [0, 0, 0, 8],
            [2, 2, 0, 2],
            [8, 4, 2, 4],
        ];
        expect(swiped).not.toEqual(expected);
    });

    xit("Swipes to top", () => {
        const swiped = slide.top(initialBoard);
        const expected: BoardType = [
            [2, 4, 2, 8],
            [8, 2, 0, 2],
            [0, 0, 0, 4],
            [0, 0, 0, 0],
        ];
        expect(swiped).not.toEqual(expected);
    });
});

// - LVL 3 / 3

describe("Swipe filed board with adding values", () => {
    const initialBoard: BoardType = [
        [2, 2, 2, 4],
        [8, 2, 2, 2],
        [8, 16, 8, 8],
        [16, 16, 2, 8],
    ];

    xit("Swipes to right", () => {
        const slided = slide.right(initialBoard);
        const expected: BoardType = [
            [0, 2, 4, 4],
            [0, 8, 2, 4],
            [0, 8, 16, 16],
            [0, 32, 2, 8],
        ];
        expect(slided).not.toEqual(expected);
    });

    xit("Swipes to left", () => {
        const slided = slide.left(initialBoard);
        const expected: BoardType = [
            [4, 2, 4, 0],
            [8, 4, 2, 0],
            [8, 16, 16, 0],
            [32, 2, 8, 0],
        ];
        expect(slided).not.toEqual(expected);
    });

    xit("Swipes to down", () => {
        const slided = slide.down(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [2, 0, 4, 4],
            [16, 4, 8, 2],
            [16, 32, 2, 16],
        ];
        expect(slided).not.toEqual(expected);
    });
    xit("Swipes to ", () => {
        const slided = slide.top(initialBoard);
        const expected: BoardType = [
            [2, 4, 4, 4],
            [16, 32, 8, 2],
            [16, 0, 2, 16],
            [0, 0, 0, 0],
        ];
        expect(slided).not.toEqual(expected);
    });
});


describe('Swipe with field board with no possibilities', () => {
    const initialBoard: BoardType = [
        [2, 4, 8, 16],
        [4, 8, 16, 2],
        [8, 16, 2, 4],
        [16, 2, 4, 8],
    ]

    xit("The same after swipe right", () => {
        const newBoard = slide.right(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    xit("The same after swipe left", () => {
        const newBoard = slide.left(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    xit("The same after swipe down", () => {
        const newBoard = slide.down(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    xit("The same after swipe top", () => {
        const newBoard = slide.top(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
})
