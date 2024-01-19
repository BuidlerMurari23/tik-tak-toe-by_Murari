import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Grid.css"
import whoIsWinner from "../../Helper/CheckingWinner";


function Grid({ numberOfCards }) {

    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [isBoardFull, setIsBoardFull] = useState(false);

    function play(index) {
        if (turn == true) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }

        const win = whoIsWinner(board, (turn) ? "O" : "X");

        if (win) {
            setWinner(win);
        }
        checkIsBoardFull(board);
        setBoard([...board]);
        setTurn(!turn);
    }

    const Reset = () => {
        setBoard(Array(numberOfCards).fill(""));
        setTurn(true);
        setWinner(null);
        setIsBoardFull(false);
    }

    const checkIsBoardFull = (brd) => {
        let emptyStringCount = 0;
        brd.forEach(el => {
            if (el === "") {
                emptyStringCount += 1;
                };
        })
        if (emptyStringCount === 0) {
            setIsBoardFull(true);
        };
    };

    return (
        <div className="grid-wrapper">
            {
                winner || isBoardFull
                    ? (
                        <>
                            {
                                winner
                                    ?
                                    <h1 className="turn-highlighter">Winner is : {winner}
                                    </h1>
                                    :
                                    <h1 className="turn-highlighter">Game is Draw
                                    </h1>
                            }
                            <div style={{ width: "500px", textAlign: "center" }}>
                                <button className="reset" onClick={Reset}>Reset Game</button>
                            </div>
                        </>
                    )
                    :
                    null
            };
            <h1 className="turn-highlighter">CurrenT Turn : {(turn) ? "O" : "X"} </h1>
            <div className="grid">
                {board.map((element, idx) => <Card key={idx} endGame={winner} 
                onPlay={play} player={element} index={idx} />)}

            </div>

        </div>
    )

}

export default Grid;