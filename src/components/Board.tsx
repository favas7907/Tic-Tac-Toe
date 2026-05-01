import { motion } from "motion/react";
import { Square } from "./Square";
import { Player } from "../hooks/useTicTacToe";

interface BoardProps {
  board: Player[];
  onClick: (index: number) => void;
  winningLine: number[] | null;
  disabled: boolean;
}

export const Board = ({ board, onClick, winningLine, disabled }: BoardProps) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
      }}
      className="grid grid-cols-3 gap-4"
    >
      {board.map((value, index) => (
        <motion.div 
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
          }}
        >
          <Square
            value={value}
            onClick={() => onClick(index)}
            isWinningSquare={winningLine?.includes(index) ?? false}
            disabled={disabled || value !== null}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
