import React, { Component } from 'react'
// import { Letter } from "./Letter";


export class EndGame extends Component {


    newGame = () => {
        this.props.newGame()
    }

    render(){
        
        const answerLetters = this.props.answer.split('').sort()
        const letterStatusArr = Object.entries(this.props.letterStatus)
        const trues = letterStatusArr.filter( innerArr => innerArr[1] == true ).map( innerArr => innerArr[0]).sort()

        return (
            <div>
                <span>
                    You've got {answerLetters.length - this.props.counter} tries left.
                </span>
                {this.props.counter == answerLetters.length //max tries exceeded
                    ? JSON.stringify(answerLetters) == JSON.stringify(trues)
                        ? <div class='success'>
                            You've got the correct answer! Congratulations!
                            <br></br>
                            <iframe width="350" height="200"
                            src={this.props.video} allow="autoplay"></iframe>
                            <br></br>
                            <button class='newGame' onClick={this.newGame}>Play Again!</button>
                         </div>
                        : <div>
                            Amounts of tries exceeded. The answer is: 
                            <span class='answer'> {this.props.answer}</span>
                            <br></br>
                            <iframe width="350" height="200"
                            src={this.props.video} allow="autoplay"></iframe>
                            <br></br>
                            <button class='gameOver' onClick={this.newGame}>Play Again!</button>
                         </div>
                    : null}
            </div>
        )
    }
}