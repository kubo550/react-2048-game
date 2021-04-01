import { Arrows, BoardType } from "./Board.types";
import { swap } from "./Board.helper"



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
        const slidedRight = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 4],
            [0, 0, 0, 2],
            [0, 0, 0, 8],
            [0, 0, 0, 16],
        ];
        expect(slidedRight).not.toEqual(expected);
    });

    xit("Slides to left", () => {
        const slidedRight = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [4, 0, 0, 0],
            [2, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
        ];
        expect(slidedRight).not.toEqual(expected);
    });

    xit("Slides to down", () => {
        const slidedRight = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [16, 2, 8, 4],
        ];
        expect(slidedRight).not.toEqual(expected);
    });

    xit("Slides to top", () => {
        const slidedRight = swap.get(Arrows.ArrowLeft)!(initialBoard);
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
        const swiped = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [0, 0, 4, 4],
            [0, 0, 0, 8],
            [0, 0, 2, 4],
            [0, 4, 2, 4],
        ];
        expect(swiped).not.toEqual(expected);
    });

    xit("Swipes to left", () => {
        const swiped = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [4, 4, 0, 0],
            [8, 0, 0, 0],
            [4, 2, 0, 0],
            [4, 2, 4, 0],
        ];
        expect(swiped).not.toEqual(expected);
    });

    xit("Swipes to down", () => {
        const swiped = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [0, 0, 0, 8],
            [2, 2, 0, 2],
            [8, 4, 2, 4],
        ];
        expect(swiped).not.toEqual(expected);
    });

    xit("Swipes to top", () => {
        const swiped = swap.get(Arrows.ArrowLeft)!(initialBoard);
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
        const slided = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [0, 2, 4, 4],
            [0, 8, 2, 4],
            [0, 8, 16, 16],
            [0, 32, 2, 8],
        ];
        expect(slided).not.toEqual(expected);
    });

    xit("Swipes to left", () => {
        const slided = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [4, 2, 4, 0],
            [8, 4, 2, 0],
            [8, 16, 16, 0],
            [32, 2, 8, 0],
        ];
        expect(slided).not.toEqual(expected);
    });

    xit("Swipes to down", () => {
        const slided = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [2, 0, 4, 4],
            [16, 4, 8, 2],
            [16, 32, 2, 16],
        ];
        expect(slided).not.toEqual(expected);
    });
    xit("Swipes to ", () => {
        const slided = swap.get(Arrows.ArrowLeft)!(initialBoard);
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
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    xit("The same after swipe left", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    xit("The same after swipe down", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    xit("The same after swipe top", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
})
