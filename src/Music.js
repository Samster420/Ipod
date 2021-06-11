import React from 'react';

//Music Component
class Music extends React.Component{
    render(){
        const {allsongs,artists,albums} = this.props;
        return(
            <div id="musiccontainer">
            {allsongs && (<div id="allsongs1" style= {{backgroundColor:'blue'}}>All Songs</div>)}
            {!allsongs && (<div id="allsongs1" style= {{backgroundColor:'white'}}>All Songs</div>)}
            {artists && (<div id="artists1" style={{backgroundColor:'blue'}}>Artists</div>)}
            {!artists && (<div id="artists1" style={{backgroundColor:'white'}}>Artists</div>)}
            {albums && (<div id="albums1" style={{backgroundColor:'blue'}}>Albums</div>)}
            {!albums && (<div id="albums1" style={{backgroundColor:'white'}}>Albums</div>)}
            </div>
           
        );
    }
}

export default Music;