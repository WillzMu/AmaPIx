import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Firebase from './config/firebase';




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item : ''
    }
    this.loadPics = this.loadPics.bind(this)
    this.loadPics()
  }
   
  loadPics =()=>{
 
    Firebase.database()
    .ref('pics/')
    .on('value', (snapshot) => {
     var randomNumber = Math.floor((Math.random() * 10))
     this.setState({
      item  : snapshot.val()[randomNumber]
     }) 
    })
  }
  render() {
    return (   
         <div style={{height:'100vh', backgroundImage: `url(${this.state.item.pic})`,
         backgroundSize:'cover'}} >
           <div style={{
              position: 'absolute', bottom: 0, width: '100%', height: '20%',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: 40, color: '#fff', float: 'center', marginLeft: '20px', fontStyle: 'oblique' }}>
              {this.state.item.quote}</p>
              </div>
      </div>
    );
  }
}

export default App;
