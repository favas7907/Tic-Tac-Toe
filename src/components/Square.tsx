import { motion } from "motion/react";
import React from 'react';

interface SquareProps {
  key?: React.Key;
  value: "X" | "O" | null;
  onClick: () => void;
  isWinningSquare: boolean;
  disabled: boolean;
}

export const Square = ({ value, onClick, isWinningSquare, disabled }: SquareProps) => {
  return (
    <motion.button
      whileHover={!disabled && !value ? { y: -2, backgroundColor: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(255, 255, 255, 0.2)" } : {}}
      whileTap={!disabled && !value ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-[24px] flex items-center justify-center text-[48px] sm:text-[54px] font-black cursor-pointer transition-all duration-300 outline-none
        ${isWinningSquare 
          ? "bg-gradient-to-br from-[rgba(255,0,128,0.2)] to-[rgba(121,40,202,0.2)] border-[#ff0080] shadow-[0_0_30px_rgba(255,0,128,0.25)] border z-10" 
          : "bg-white/[0.03] border border-white/[0.08] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"}
      `}
    >
      {value && (
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`z-20 ${
            value === "X" 
              ? "bg-gradient-to-br from-[#ff0080] to-[#ff8a00] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,128,0.3)]" 
              : "bg-gradient-to-br from-[#7928ca] to-[#ff0080] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(121,40,202,0.3)]"
          }`}
          style={{
             WebkitTextFillColor: "transparent"
          }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
};
