import React, { Component } from 'react';
import './App.css';

export class Letter extends Component {

    selectLetter = () => {
        this.props.selectLetter(this.props.availableLetters)
    }

    render(){
        return(
            <span>
                <span>  
                    {this.props.letter}
                </span>
                <span class={this.props.class} onClick={this.selectLetter}>
                    {this.props.availableLetters}
                </span>
            </span>
        )
    }

}