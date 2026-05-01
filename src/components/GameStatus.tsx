import { motion, AnimatePresence } from "motion/react";
import { Player } from "../hooks/useTicTacToe";

interface GameStatusProps {
  winner: Player | "Draw";
  xIsNext: boolean;
}

export const GameStatus = ({ winner, xIsNext }: GameStatusProps) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[rgba(255,0,128,0.1)] to-[rgba(121,40,202,0.1)] border border-[rgba(255,0,128,0.2)] text-[13px] font-semibold tracking-[0.02em] uppercase mt-auto self-start shadow-[0_0_20px_rgba(255,0,128,0.1)]">
      <AnimatePresence mode="popLayout">
        <motion.div
           key={winner || (xIsNext ? "X" : "O")}
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           exit={{ scale: 0.8, opacity: 0 }}
           className="flex items-center gap-2.5"
        >
          {winner === "Draw" ? (
             <>
               <div className="w-2 h-2 rounded-full bg-[#94a3b8] shadow-[0_0_8px_#94a3b8]" />
               IT'S A DRAW
             </>
          ) : winner ? (
             <>
               <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${winner === "X" ? "bg-[#ff0080] text-[#ff0080]" : "bg-[#7928ca] text-[#7928ca]"}`} />
               PLAYER {winner} WINS
             </>
          ) : (
             <>
               <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${xIsNext ? "bg-[#ff0080] text-[#ff0080]" : "bg-[#7928ca] text-[#7928ca]"}`} />
               PLAYER {xIsNext ? "X" : "O"}'S TURN
             </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
