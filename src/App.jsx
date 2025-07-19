import Header from "./components/Header"
import Status from "./components/Status"
import Language from "./components/Language"
import { languages } from "../languages"
import { useState } from "react"
import { clsx } from "clsx"
import { getWord } from "../utils"
import Confetti from "react-confetti"

export default function App() {
    //State Values 
    const [currentWord, setCurrentWord] = useState(() => getWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    //Derived Values
    const wrongValues = guessedLetters.filter(item => 
        !currentWord.includes(item)
    ) 
    const wrongGuessCount = wrongValues.length
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

    //Static Values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function guessLetter(letter) {
        setGuessedLetters(prevGuessedLetter => 
            prevGuessedLetter.includes(letter) ?
            prevGuessedLetter :
            [...prevGuessedLetter, letter]
        )
    }

    const wordList = currentWord.split("").map((word, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(word)
        const className = clsx(
            isGameLost && !guessedLetters.includes(word) && "missed-letter"
        )
        return (
            <span className={className} key={index} >{shouldRevealLetter ? word.toUpperCase() : null}</span>
        )
    }
    )

    const languagesList = languages.map((language, index) => {
         const className = clsx("language-unit", index < wrongGuessCount && "lost")
        return (
            <Language  className={className} key={language.name} name={language.name} color={language.color} background={language.backgroundColor}/>
        ) 
    } 

    )


    const alphabetList = alphabet.split("").map(alpha => {
        const isGuessed = guessedLetters.includes(alpha)
        const isCorrect = isGuessed && currentWord.includes(alpha)
        const isWrong = isGuessed && !currentWord.includes(alpha)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button 
                onClick={() => guessLetter(alpha)} 
                key={alpha} 
                className={className}
                disabled={isGameOver}>
                    {alpha.toUpperCase()}
            </button>
        )
    }
    )

    function resetGame() {
        setGuessedLetters([])
        setCurrentWord(() => getWord())
    }

	return (
		<main className="wrapper">
            <Header />
            <Status  wrongGuessCount={wrongGuessCount} isLastGuessIncorrect={isLastGuessIncorrect} isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver}/>
            <section className="language-list">
                {languagesList}
            </section>
            <section className="word-list">
                {wordList}
            </section>
            <section className="alphabet-list">
                {alphabetList}
            </section>
            {isGameOver && <button onClick={resetGame} className="new-button">New Game</button>}
            {isGameWon && <Confetti recycle={false} numberOfPieces={1000}/>}
		</main>
	)
}