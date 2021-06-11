import logo from './logo.svg';
import './App.css';
import React from 'react';
import ZingTouch from 'zingtouch';
import Screen from './Screen';
import Menu from './Menu';

// Main Parent app component
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
     coverflow:true,
     music:false,
     settings:false,
     games:false,
     action:false,
     currentPage:'menu',
     allsongs:true,
     artists:false,
     albums:false

  }
  // this.rotateElement = this.rotateElement.bind(this);
}

// Rotation function of ipod
  rotateElement = () => {
    const {coverflow,music,settings,games} = this.state;
    // const setState = this.setState;
    const x = this;
   var toucharea = document.getElementById('circle');
   toucharea.setAttribute('draggable',false);
    var myRegion = new ZingTouch.Region(toucharea);
   
    myRegion.bind(toucharea,'rotate',function(e){
          if(e.detail.angle > 15 && e.detail.distanceFromLast >= 0){
              if(coverflow === true){
                x.setState({
                  coverflow:false,
                  music:true,
                  settings:false,
                 games:false,
                 action:false
  
                   });
               
              }  
              else if(music === true){
                x.setState({
                  coverflow:false,
                  music:false,
                  settings:true,
                 games:false,
                 action:false

                 });
               
              } 
              else if(settings === true){
                x.setState({
                  coverflow:false,
                  music:false,
                  settings:false,
                 games:true,
                 action:false
                });
                
              } 
              else{
                x.setState({
                  coverflow:true,
                  music:false,
                  settings:false,
                 games:false,
                 action:false
                });
                
              }  

              if(x.state.currentPage === 'music' && x.state.allsongs === true){
                x.setState({
                  allsongs:false,
                  artists:true
                })
              }
              else if(x.state.currentPage === 'music' && x.state.artists === true){
                x.setState({
                  artists:false,
                  albums:true
                })
              }
              else if(x.state.currentPage === 'music' && x.state.albums === true){
                x.setState({
                  albums:false,
                  allsongs:true
                })
              }
          }
          else if(e.detail.angle > 15 && e.detail.distanceFromLast < 0){
            if(games === true){
           
              x.setState({
                coverflow:false,
                music:false,
                settings:true,
               games:false,
               action:false
              });
              
            }  
            else if(settings === true){
              x.setState({
                coverflow:false,
                music:true,
                settings:false,
               games:false,
               action:false
              });
              
            } 
            else if(music === true){
              x.setState({
                coverflow:true,
                music:false,
                settings:false,
               games:false,
               action:false
              });
             
            } 
            else{
              x.setState({
                coverflow:false,
                  music:false,
                  settings:false,
                 games:true,
                 action:false
              });
             
            }  

            if(x.state.currentPage === 'music' && x.state.albums === true){
              x.setState({
                albums:false,
                artists:true
              })
            }
            else if(x.state.currentPage === 'music' && x.state.artists === true){
              x.setState({
                artists:false,
                allsongs:true
              })
            }
            else if(x.state.currentPage === 'music' && x.state.allsongs === true){
              x.setState({
                allsongs:false,
                albums:true
              })
            }
          }
    });

}
 
//Function to handle clicks on middle button of ipod
handleEvent = (e) =>{
  e.preventDefault();
  if(this.state.coverflow === true && this.state.action === true){
      this.setState({
        action:false,
        currentPage:'menu'
      })
  } 
  else if(this.state.coverflow === true){
    this.setState({
      action:true,
      currentPage:'coverflow'
    })
  }
  else if(this.state.games === true && this.state.action === true){
      this.setState({
        action:false,
        currentPage:'menu'
      })
  }
  else if(this.state.games === true){
    this.setState({
      action:true,
      currentPage:'games'
    })
  }
  else if(this.state.settings === true && this.state.action === true){
    this.setState({
      action:false,
      currentPage:'menu'
    })
  }
  else if(this.state.settings === true){
    this.setState({
      action:true,
      currentPage:'settings'
    })
  }
  else if(this.state.music === true && this.state.action === true){
    this.setState({
      action:false,
      currentPage:'menu'
    })
  } 
  else if(this.state.music === true){
    this.setState({
      action:true,
      currentPage:'music'
    })
  }
  
}

//Function to handle clicks on menu button of ipod
gotoMenu = () => {
  this.setState({
    currentPage : 'menu'
  })
  
}

// myCondition = () => {
//   return (
//   <Menu />
//   );
// }


  render(){

    
    
    
    const {coverflow, music,settings ,games,action,currentPage,allsongs,artists,albums}  = this.state;
  return (
    
    <div className="App">
      <Screen
        coverflow = {coverflow} 
        music = {music}   
        settings ={settings}
        games = { games }
        action = { action }
        currentPage = {currentPage}
        allsongs = {allsongs}
        albums = {albums}
        artists = {artists}
              />
      <div className="box">
        <div id="circle" onMouseOver = {this.rotateElement}>
         <div id="smallCircle" onClick = {this.handleEvent}>
          </div>
          <div className="menu" onClick={this.gotoMenu}>MENU</div>
          <div className="fastforward"><img style={styles.fastforward} src="https://image.flaticon.com/icons/png/512/60/60678.png" /></div>
          <div className="backforward"><img style={styles.backforward} src="https://image.flaticon.com/icons/png/128/60/60769.png" /></div>
          <div className="playpause"><img style={styles.playpause} src="https://image.flaticon.com/icons/png/512/3278/3278479.png" /></div>
          
        </div>
      </div>
    </div>
  );
   
  }
}




const styles={
   fastforward:{
     height:'35px',
     width:'35px',
     marginLeft:'150px',
     marginTop:'35px'
   },
   backforward:{
     height:'35px',
     width:'35px',
     float:'left',
     position:'relative',
     top:'-30px',
     marginLeft:'15px'
   },
   playpause:{
     height:'35px',
     width:'35px',
     marginTop:'40px',
     float:'left',
     marginLeft:'40px'
   }
}

export default App;
