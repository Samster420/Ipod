import React from 'react';
import './Music.css';



//Main Menu component
class Menu extends React.Component{
   
render(){
    const {coverflow, music, settings, games,action,currentPage} = this.props;
    return(
      <div>
             <h1>Ipod.js</h1>
             {coverflow && <div id='coverflow1' style={{backgroundColor:'blue'}}>Coverflow</div>}
                  {!coverflow && <div id='coverflow1' style={{backgroundColor:'white'}}>Coverflow</div> }
                  {music && <div id='music1' style={{backgroundColor:'blue'}}>Music</div>}
                  {!music && <div id='music1' style={{backgroundColor:'white'}}>Music</div> }
                  {settings && <div id='settings1' style={{backgroundColor:'blue'}}>Settings</div>}
                  {!settings && <div id='settings1' style={{backgroundColor:'white'}}>Settings</div> }
                  {games && <div id='games1' style={{backgroundColor:'blue'}}>Games</div>}
                  {!games && <div id='games1' style={{backgroundColor:'white'}}>Games</div> }  
      </div>
                  
    );

}
}


export default Menu;