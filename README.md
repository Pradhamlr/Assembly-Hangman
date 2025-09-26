# 🎮 Assembly: Endgame

> *Save the programming world from Assembly language dominance!*

A captivating React-powered word guessing game where players race against elimination to preserve their favorite programming languages. Each wrong guess brings Assembly closer to total domination.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 🎯 Game Overview

**Assembly: Endgame** challenges players to guess a random word within 8 attempts. Each incorrect guess eliminates a programming language from the colorful stack, creating tension as Assembly threatens to dominate the programming landscape.

### 🎮 Game Features

- **Dynamic Visual Feedback**: Programming language cards disappear with wrong guesses
- **Interactive Alphabet**: Color-coded buttons show correct/incorrect guesses
- **Victory Celebrations**: Confetti animations for successful completions
- **Reset Functionality**: Start fresh with new random words
- **Responsive Design**: Optimized for all screen sizes

## 🛠️ Technologies

**Frontend & Core**
- React.js (Hooks, Functional Components, State Management)
- Modern JavaScript (ES6+, Array Methods, Event Handling)
- Vite (Build Tool, Hot Module Replacement)
- CSS3 (Flexbox, Responsive Design, Custom Styling)

**Libraries & Utilities**
- clsx - Dynamic CSS class management
- react-confetti - Victory animations
- Component-based architecture
- Conditional rendering systems

**Development Tools**
- ESLint - Code quality & linting
- Git/GitHub - Version control
- VS Code - Development environment
- Node.js - Runtime environment

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Pradhamlr/Assembly-Hangman.git
cd Assembly-Hangman
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality checks
npm run lint
```

## 🎮 How to Play

1. **Start the Game**: A random word is selected and displayed as blank spaces
2. **Make Guesses**: Click alphabet buttons to guess letters
3. **Watch the Stakes**: Wrong guesses eliminate programming languages
4. **Win or Lose**: 
   - **Victory**: Guess all letters before languages run out
   - **Defeat**: Make too many wrong guesses and Assembly wins
5. **Play Again**: Click "New Game" to start fresh

## 🏗️ Project Structure

```
Assembly-Game/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Game title and branding
│   │   ├── Language.jsx    # Individual language cards
│   │   └── Status.jsx      # Game status display
│   ├── App.jsx             # Main game logic
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── languages.js            # Programming languages data
├── utils.js                # Game utility functions
├── words.js                # Word database
└── package.json            # Project dependencies
```

## 🔧 Game Logic

The game implements sophisticated state management using React hooks:

- **State Management**: `useState` for game state and user interactions
- **Derived State**: Real-time calculations for win/loss conditions
- **Dynamic Rendering**: Conditional display based on game progress
- **Event Handling**: Interactive alphabet and reset functionality

## 🎨 Styling Features

- **Dark Theme**: Modern, developer-friendly color scheme
- **Responsive Layout**: Seamless experience across devices
- **Visual Feedback**: Color-coded alphabet buttons
- **Animations**: Smooth transitions and victory effects
- **Typography**: Clear, readable font choices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for lightning-fast development experience
- The programming community for inspiration

---

**Built with ❤️ by [Pradhamlr](https://github.com/Pradhamlr)**

*Save the languages, defeat Assembly!* 🚀
