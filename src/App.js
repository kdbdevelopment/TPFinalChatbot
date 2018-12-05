import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './componentes/chat';
//create-react-app tpfinalchatbot
//npm i react-native-dialogflow
//npm install --save react-native-dialogflow
//npm install express --save
//import Dialogflow from "react-native-dialogflow";

class App extends Component {

    constructor(props){
      super(props);
    }

  render() {
    return (
      
      <main>
        
          <Chat />
         


       
          <div class="imagenBot">
          <img src="https://universoabiertoblog.files.wordpress.com/2017/01/aco_bot.jpg?w=625" />
          </div>
          <div class="imagenHumano">
          <img src="http://snappybots.com/resources/img/snappy-hero.svg" />
          </div>
          <div class="imagenFlechaBi">
          <img src="https://cdn.pixabay.com/photo/2012/04/10/23/46/arrows-27112__340.png" />
          </div>
          
      </main>
    );
  }
}

export default App;
