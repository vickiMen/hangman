import React, { Component } from 'react';
import logo from './logo.svg';
import { Solution } from './Solution.js';
import { Score } from './Score.js';
import { Letters } from './Letters.js';
import { EndGame } from './EndGame.js';
import './App.css';



class App extends Component {

  constructor(){
    super()
    this.state = {
      letterStatus: this._generateLetterStatuses(),
      solution: [
        {
          word: 'pikachu',
          hint: 'Some kind of a Pokemon?',
          video: 'https://www.youtube.com/embed/6Jw4eM-9SAo?autoplay=1&start=7'
        },
        {
          word: 'metal',
          hint: 'Everyone knows that the best music genre is...?',
          video: 'https://www.youtube.com/embed/8Ik9qECIWgc?autoplay=1&start=43'
        },
        {
          word: 'food',
          hint: 'Animals are friends, not...',
          video: 'https://www.youtube.com/embed/sD9gTAFDq40?autoplay=1&start=4'
        },
        {
          word: 'windows',
          hint: 'Yoni\'s favorite OS..?',
          video: 'https://www.youtube.com/embed/KXSJNBGUH_o?autoplay=1'
        }
      ],
      score: 0,
      counter: 0
    }
  }

  _generateLetterStatuses(){
    let alphabet = {}
    for (let i=0; i<26; i++){
        alphabet[((i+10).toString(36))] = false
    }
    return alphabet
  }

  selectLetter = (letter) => {
    let localLetterStatus = {...this.state.letterStatus}
    localLetterStatus[letter] = true
    let localCounter = this.state.counter
    localCounter++
    this.setState({
      letterStatus: localLetterStatus,
      counter: localCounter
    })
  }

  updateScore = () => {
    // let currentScore = this.state.score
    // currentScore+=10
    this.setState({
      score: this.state.score+10,
    })
  }

  newGame = () => {
    let localCounter = this.state.counter
    localCounter = 0
    let localSolution = [...this.state.solution]
    localSolution.splice(0,1)
    let localLetterStatus = {...this.state.letterStatus}
    localLetterStatus = this._generateLetterStatuses()
    this.setState({
      counter: localCounter,
      solution: localSolution,
      letterStatus: localLetterStatus
    })
  }

  render(){
    return(
      <div>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution[0]} updateScore={this.updateScore} counter={this.state.counter}/>
        <EndGame letterStatus={this.state.letterStatus} answer={this.state.solution[0].word} video={this.state.solution[0].video} counter={this.state.counter} newGame={this.newGame}/>
      </div>
    )
  }

}

export default App;