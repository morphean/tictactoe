import {checkWinner} from "./utils";

describe('it checks board positions for a winning combination', () => {
    it('checks is X,X,X in the first row wins', ()=> {
        const positions = ['X','X','X',null,null,null,null,null,null]
        expect(checkWinner(positions)).toBeTruthy();
    });
    it('checks is X,O,X in the first row wins', ()=> {
        const positions = ['X','O','X',null,null,null,null,null,null]
        expect(checkWinner(positions)).toBeFalsy();
    });
    it('checks a game has no winner', ()=> {
        const positions = [
            'X','O','X',
            'O','X','O',
            'O','X','O',
        ]
        expect(checkWinner(positions)).toBeFalsy();
    });
    it('checks a game has a winner', ()=> {
        const positions = [
            'O','O','X',
            'X','O','X',
            'O','X','O',
        ]
        expect(checkWinner(positions)).toBeTruthy();
    });
});