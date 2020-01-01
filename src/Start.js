import React, { Component } from 'react';
import './App.css';


export class Start extends Component{

    updateRiddle = () => {
        this.props.updateRiddle("StartingPoint")
    }

    render(){
        return(
            <div class='startGame'>
                <button onClick={this.updateRiddle}>let's play!</button>
            </div>
        )

    }

}