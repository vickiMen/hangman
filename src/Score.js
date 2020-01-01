import React, { Component } from 'react';
import './App.css';


export class Score extends Component{

    render(){
        return(
            <div class='score'>
                <span>Your score is: {this.props.score}</span>
            </div>
        )

    }

}