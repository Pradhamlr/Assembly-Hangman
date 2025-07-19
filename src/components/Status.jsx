import { clsx } from "clsx"
import { getFarewellText } from "../../utils"
import { languages } from "../../languages"

export default function Status(props) {

    function renderGameStatus() {
        if (!props.isGameOver && props.isLastGuessIncorrect) {
            return (
                <p 
                    className="status-description"
                >
                    {getFarewellText(languages[props.wrongGuessCount - 1].name)}
                </p>
            )
        }

        if (props.isGameWon) {
            return (
                <>
                    <h2 className="status-header">You win!</h2>
                    <p className="status-description">Well done! 🎉</p>
                </>
            )
        } 
        if (props.isGameLost) {
            return (
                <>
                    <h2 className="status-header">Game over!</h2>
                    <p className="status-description">You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        
        return null
    }

    const className = clsx("status-container", {
        won: props.isGameWon,
        lost: props.isGameLost,
        farewell: !props.isGameOver && props.isLastGuessIncorrect
    })
    return (
        <section className={className}>
            {renderGameStatus()}
        </section>
    )
}