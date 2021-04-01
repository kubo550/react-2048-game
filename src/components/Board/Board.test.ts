import { Arrows, BoardType } from "./Board.types";
import { hasChanged, hasPossibilities, swap } from "./Board.helper"


describe("Swipe filed board with adding values", () => {
    const initialBoard: BoardType = [
        [2, 2, 2, 4],
        [8, 2, 2, 2],
        [8, 16, 8, 8],
        [16, 16, 2, 8],
    ];

    it("Swipes to right", () => {
        const slided = swap.get(Arrows.ArrowRight)!(initialBoard);
        const expected: BoardType = [
            [0, 2, 4, 4],
            [0, 8, 2, 4],
            [0, 8, 16, 16],
            [0, 32, 2, 8],
        ];
        expect(slided).toEqual(expected);
    });

    it("Swipes to left", () => {
        const slided = swap.get(Arrows.ArrowLeft)!(initialBoard);
        const expected: BoardType = [
            [4, 2, 4, 0],
            [8, 4, 2, 0],
            [8, 16, 16, 0],
            [32, 2, 8, 0],
        ];
        expect(slided).toEqual(expected);
    });

    it("Swipes to down", () => {
        const slided = swap.get(Arrows.ArrowDown)!(initialBoard);
        const expected: BoardType = [
            [0, 0, 0, 0],
            [2, 0, 4, 4],
            [16, 4, 8, 2],
            [16, 32, 2, 16],
        ];
        expect(slided).toEqual(expected);
    });
    it("Swipes to top", () => {
        const slided = swap.get(Arrows.ArrowUp)!(initialBoard);
        const expected: BoardType = [
            [2, 4, 4, 4],
            [16, 32, 8, 2],
            [16, 0, 2, 16],
            [0, 0, 0, 0],
        ];
        expect(slided).toEqual(expected);
    });
});


describe('Swipe with field board with no possibilities', () => {
    const initialBoard: BoardType = [
        [2, 4, 8, 16],
        [4, 8, 16, 2],
        [8, 16, 2, 4],
        [16, 2, 4, 8],
    ]

    it("The same after swipe right", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    it("The same after swipe left", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    it("The same after swipe down", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
    it("The same after swipe top", () => {
        const newBoard = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(newBoard).toEqual(initialBoard)
    });
})

describe('Testing other functions', () => {

    it("hasChanged function with change", () => {
        const initialBoard: BoardType = [
            [0, 0, 0, 4],
            [0, 0, 0, 2],
            [0, 0, 0, 2],
            [0, 0, 2, 8],
        ];
        const swapped = swap.get(Arrows.ArrowLeft)!(initialBoard);
        expect(hasChanged(initialBoard, swapped)).toBeTruthy()
    });

    it("hasChanged function with no change", () => {
        const initialBoard: BoardType = [
            [0, 0, 0, 4],
            [0, 0, 0, 2],
            [0, 0, 0, 2],
            [0, 0, 2, 8],
        ];
        const swapped = swap.get(Arrows.ArrowRight)!(initialBoard);
        expect(hasChanged(initialBoard, swapped)).toBeFalsy()
    });

    it("hasPossibilities function with possibilities", () => {
        const initialBoard: BoardType = [
            [2, 0, 8, 16],
            [0, 2, 0, 8],
            [8, 0, 2, 0],
            [16, 8, 0, 2],
        ];
        expect(hasPossibilities(initialBoard)).toBeTruthy();
    });


    it("hasPossibilities function with no possibilities", () => {
        const initialBoard: BoardType = [
            [2, 4, 8, 16],
            [4, 2, 4, 8],
            [8, 4, 2, 4],
            [16, 8, 4, 2],
        ];
        expect(hasPossibilities(initialBoard)).toBeFalsy();
    });


})
