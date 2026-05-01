# Neon Strike: Premium Tic-Tac-Toe

A visually stunning, ultra-premium Tic-Tac-Toe game built with React.js, Tailwind CSS, and Framer Motion. It features a high-end "Geometric Balance" design with a dark violet and pink gradient theme, glassmorphism effects, and highly polished interactions.

## 🚀 Built With

- **React 19** - UI Library (Functional Components & Hooks)
- **Vite** - Frontend Tooling & Bundler
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Fluid layout animations and micro-interactions
- **TypeScript** - Static typing for robust code

## ✨ Features

- **Geometric Balance Theme**: A visually striking UI with seamless gradient blobs, glassmorphism, and neon accents.
- **Fluid Animations**: Smooth transitions for every interaction—from board entrance to placing markers and winning state highlights, powered by Framer Motion.
- **Sound Effects**: Custom synthesized audio feedback for clicks, winning, and drawing, generated using the Web Audio API. 
- **Score Tracking**: Persistent scoreboard tracking wins for Player X, Player O, and Draws within the current session.
- **Dynamic Status Indicator**: A glowing, animated status pill showing the current turn or the game's outcome.
- **Responsive Design**: Designed to look glorious on both desktop and mobile screens.

## 🎮 How to Play

1. Player `X` (Neon Pink) always goes first.
2. Players take turns clicking on empty squares to place their mark.
3. The first player to get 3 of their marks in a row (up, down, across, or diagonally) wins!
4. If all 9 squares are filled and no one has 3 in a row, the game is a draw.
5. Use the "Restart Game" button to clear the board and play again.
6. Use the "Reset Scores" button to reset the scoreboard to zero.

## 📂 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Board.tsx       # Grid container handling the 3x3 layout
│   │   ├── GameStatus.tsx  # Animated indicator for turns and game over states
│   │   ├── ScoreBoard.tsx  # Tracks wins for X, O, and Draws
│   │   └── Square.tsx      # Interactive individual cell component
│   ├── hooks/
│   │   └── useTicTacToe.ts # Core game logic and state management
│   ├── utils/
│   │   └── audio.ts        # Web Audio API implementation for sound effects
│   ├── App.tsx             # Main layout and composition
│   ├── index.css           # Global styles and typography (Outfit font)
│   └── main.tsx            # React application entry point
├── package.json
└── vite.config.ts
```

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

This project aims to elevate a simple classic game into a "Top 0.1%" modern web product. Every visual choice is deliberate:
- **Craftsmanship over Defaults**: No generic buttons or default shadows.
- **Intentional Variation**: Distinctive typography (Outfit) paired with monospace digits for the scoreboard.
- **Purposeful Animation**: Spring-based scaling on marks to give them weight, and gentle background blur/pulse to maintain a living aesthetic.

---

