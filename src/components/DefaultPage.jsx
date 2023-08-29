import React from 'react';
import { BrowserRouter as Router, Routes,
    Route } from "react-router-dom";


class DefaultPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="App-header">

                <div className="topnav">
                    <a href="#about">Account</a>
                    <a href="./Teams.jsx">Teams</a>
                    <a href="#news">Players</a>
                    <a  >Home</a>
                </div>
            </div>
            
        )
    }
}

export default DefaultPage