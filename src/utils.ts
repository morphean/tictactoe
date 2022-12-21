const WINNING_POSITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const checkWinner = (board:any[], ) => {

    for (let i = 0; i < WINNING_POSITIONS.length; i++) {
        const [a, b, c] = WINNING_POSITIONS[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}