import React from 'react';
import './App.css';
import Menu from './Menu';
import Coverflow from './Coverflow';
import Games from './Games';
import Settings from './Settings';
import Music from './Music';




//Screen Component
class Screen extends React.Component {

    constructor(){
        super();
    }
    render(){
        const {coverflow, music, settings, games,action,currentPage,allsongs,artists,albums} = this.props;
        return(
            <div id="maincontainer">
                  {currentPage==='menu' && <Menu coverflow={coverflow} music={music} settings={settings} games={games} action={action} /> }
                  {currentPage === 'coverflow' && <Coverflow />}
                  {currentPage === 'games' && <Games /> }
                  {currentPage === 'settings' && <Settings /> }
                  {currentPage === 'music' && <Music allsongs={allsongs} artists={artists} albums={albums} />}

                  {/* {coverflow && <div id='coverflow1' style={{backgroundColor:'blue'}}>Coverflow</div>}
                  {!coverflow && <div id='coverflow1' style={{backgroundColor:'white'}}>Coverflow</div> }
                  {music && <div id='music1' style={{backgroundColor:'blue'}}>Music</div>}
                  {!music && <div id='music1' style={{backgroundColor:'white'}}>Music</div> }
                  {settings && <div id='settings1' style={{backgroundColor:'blue'}}>Settings</div>}
                  {!settings && <div id='settings1' style={{backgroundColor:'white'}}>Settings</div> }
                  {games && <div id='games1' style={{backgroundColor:'blue'}}>Games</div>}
                  {!games && <div id='games1' style={{backgroundColor:'white'}}>Games</div> } */}
    
         
            </div>
            
            
            
        );
    }
   
}

export default Screen;