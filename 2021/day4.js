function part1([drawnNumbers, boards]) {
    console.log(boards);
    let unmatchedSum = 0;
    let foundByNumber = 0;

    for (let dn = 0; dn < drawnNumbers.length; dn++) {
        const drawnNumber = drawnNumbers[dn];

        for (let b = 0; b < boards.length; b++) {
            const board = boards[b];

            for (let c = 0; c < board.length; c++) {
                const col = board[c];

                for (let r = 0; r < col.length; r++) {
                    if (col[r] === drawnNumber) {
                        boards[b][c][r] = -1;
                    }
                }
            }
        }

        if (dn >= 5) {
            // only after 5 iterations there could be a bingo

            for (const board of boards) {
                for (const col of board) {
                    if (col.reduce((p, n) => p + n, 0) === -5) {
                        // found horizontal match
                        unmatchedSum = board.flat().filter((e) => e !== -1).reduce((p, n) => p + n, 0);
                        foundByNumber = drawnNumber;
                        break;
                    }
                }

                if (!unmatchedSum) {
                    const tempBoard = [[], [], [], [], []];

                    for (let c = 0; c < 5; c++) {
                        const col = board[c];

                        for (let r = 0; r < 5; r++) {
                            const row = col[r];

                            tempBoard[r][c] = row;
                        }
                    }

                    for (const col of tempBoard) {
                        if (col.reduce((p, n) => p + n, 0) === -5) {
                            // found horizontal match
                            unmatchedSum = board.flat().filter((e) => e !== -1).reduce((p, n) => p + n, 0);
                            foundByNumber = drawnNumber;
                            break;
                        }
                    }
                }
            }

            if (unmatchedSum && foundByNumber) {
                break;
            }
        }
    }

    return foundByNumber * unmatchedSum;
}

function part2([drawnNumbers, boards]) {
}

module.exports = { part1, part2 };
