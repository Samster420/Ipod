import React from 'react';
import './Games.css';


//Games Component
class Games extends React.Component{
     render(){
         return(
             <div>
               <h1 id="gamesid">Games</h1>
               <img id="gamesimage" src="https://image.flaticon.com/icons/png/512/1055/1055804.png" />
             </div>
            
         );
     }
}

export default Games;