import { useState, useCallback, useEffect } from "react";
import { soundManager } from "../utils/audio";

export type Player = "X" | "O" | null;

export interface GameState {
  board: Player[];
  xIsNext: boolean;
  winner: Player | "Draw";
  winningLine: number[] | null;
  scores: { X: number; O: number; Draws: number };
}

const checkWinner = (squares: Player[]): { winner: Player; line: number[] | null } => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }

  return { winner: null, line: null };
};

export const useTicTacToe = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [scores, setScores] = useState({ X: 0, O: 0, Draws: 0 });
  const [winnerInfo, setWinnerInfo] = useState<{ winner: Player | "Draw"; line: number[] | null }>({
    winner: null,
    line: null,
  });

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || winnerInfo.winner) return;

      soundManager.playClick();

      const newBoard = [...board];
      newBoard[index] = xIsNext ? "X" : "O";
      setBoard(newBoard);
      
      const { winner, line } = checkWinner(newBoard);
      
      if (winner) {
        setWinnerInfo({ winner, line });
        setScores((prev) => ({ ...prev, [winner]: prev[winner as "X" | "O"] + 1 }));
      } else if (!newBoard.includes(null)) {
        setWinnerInfo({ winner: "Draw", line: null });
        setScores((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
      } else {
        setXIsNext(!xIsNext);
      }
    },
    [board, xIsNext, winnerInfo.winner]
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinnerInfo({ winner: null, line: null });
  }, []);

  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0, Draws: 0 });
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    if (winnerInfo.winner === "X" || winnerInfo.winner === "O") {
      soundManager.playWin();
    } else if (winnerInfo.winner === "Draw") {
      soundManager.playDraw();
    }
  }, [winnerInfo.winner]);

  return {
    board,
    xIsNext,
    winner: winnerInfo.winner,
    winningLine: winnerInfo.line,
    scores,
    handleClick,
    resetGame,
    resetScores,
  };
};
