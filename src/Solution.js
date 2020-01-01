import React, { Component } from 'react'
import { Letter } from "./Letter";


export class Solution extends Component {

    updateScore = () => {
        this.props.updateScore()
    }

    render(){

        let wordBreakDown = this.props.solution.word.split('')
        let trues = Object.values(this.props.letterStatus).filter( value => value == true )

        return (
            <div>
                <div class='hint'>
                    {this.props.solution.hint}
                </div>
                {wordBreakDown.map( letter => this.props.letterStatus[letter] == false 
                    ? <Letter letter={'_ '} status='false'/>
                    : this.props.counter == 0
                        ? <Letter letter={'_ '} status='false'/>
                        : <Letter letter={letter} updateScore={this.updateScore} status='true'/>
                )}
            </div>
        )
    }

}