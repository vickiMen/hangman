import React, { Component } from 'react'
import { Letter } from "./Letter";
import './App.css';

export class Letters extends Component {

    // selectLetter = (letter) => {
    //     this.props.selectLetter(letter)
    // }

    render(){

        const letters = Object.keys(this.props.letterStatus)
        const letterStatus = Object.values(this.props.letterStatus)

        return (
            <div>
                Available Letters: <br></br>
        {letters.map( (letter,i) => <Letter availableLetters={letter} class={letterStatus[i] == false ? 'unselected' : 'selected'} selectLetter={this.props.selectLetter}/> )}
            </div>
        )
    }

}