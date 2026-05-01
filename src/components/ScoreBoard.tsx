import { motion, AnimatePresence } from "motion/react";

interface ScoreBoardProps {
  scores: { X: number; O: number; Draws: number };
}

export const ScoreBoard = ({ scores }: ScoreBoardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-[24px]"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3 font-semibold text-sm">
          <span className="text-[#ff0080]">●</span> PLAYER X
        </div>
        <div className="font-mono text-2xl font-bold flex">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={scores.X}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-[#ff0080] drop-shadow-[0_0_10px_rgba(255,0,128,0.5)]"
            >
              {String(scores.X).padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3 font-semibold text-sm">
          <span className="text-[#7928ca]">●</span> PLAYER O
        </div>
        <div className="font-mono text-2xl font-bold flex">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={scores.O}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-[#7928ca] drop-shadow-[0_0_10px_rgba(121,40,202,0.5)]"
            >
              {String(scores.O).padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 font-semibold text-sm text-[#94a3b8]">
          <span className="text-[#94a3b8]">●</span> DRAWS
        </div>
        <div className="font-mono text-2xl font-bold flex">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={scores.Draws}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-[#94a3b8]"
            >
              {String(scores.Draws).padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
