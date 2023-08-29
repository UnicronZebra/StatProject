import React from 'react';
import PlayerTile from "./PlayerTile.jsx"
import DefaultPage from './DefaultPage.jsx';

class HomePage extends DefaultPage{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div >
                <div className="player-tile-layout" >
                    <PlayerTile />
                    <PlayerTile />
                    <PlayerTile />
                    <PlayerTile />
                    <PlayerTile />
                </div>

            </div>
            
        )
    }
}

export default HomePage