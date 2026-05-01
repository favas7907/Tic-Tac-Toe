import { motion } from "motion/react";
import { useTicTacToe } from "./hooks/useTicTacToe";
import { Board } from "./components/Board";
import { ScoreBoard } from "./components/ScoreBoard";
import { GameStatus } from "./components/GameStatus";

export default function App() {
  const { board, xIsNext, winner, winningLine, scores, handleClick, resetGame, resetScores } = useTicTacToe();

  return (
    <div className="min-h-screen bg-[#090412] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-[#ff0080]/30">
      
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(121,40,202,1) 0%, transparent 70%)" }}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(255,0,128,1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 p-6 md:p-10 bg-white/[0.01] backdrop-blur-[20px] border border-white/[0.08] rounded-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        
        {/* Sidebar */}
        <div className="flex flex-col justify-between h-full gap-8">
          <div className="space-y-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[40px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-2 bg-gradient-to-br from-[#ff0080] via-[#ae24ad] to-[#7928ca] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,128,0.3)]"
              >
                NEON<br/>STRIKE
              </motion.h1>
            </div>
            
            <ScoreBoard scores={scores} />
          </div>

          <GameStatus winner={winner} xIsNext={xIsNext} />
        </div>

        {/* Main Board Area */}
        <div className="flex flex-col items-center justify-center gap-10">
          <Board
            board={board}
            onClick={handleClick}
            winningLine={winningLine}
            disabled={winner !== null}
          />

          {/* Controls */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white font-bold text-sm tracking-[0.05em] uppercase shadow-[0_10px_20px_-5px_rgba(255,0,128,0.4)] border-none transition-shadow hover:shadow-[0_10px_25px_-5px_rgba(255,0,128,0.6)]"
            >
              Restart Game
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={resetScores}
              className="px-7 py-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] text-white font-bold text-sm tracking-[0.05em] uppercase transition-colors"
            >
              Reset Scores
            </motion.button>
          </div>
        </div>

      </div>
    </div>
  );
}
