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
       
      </main>
    );
  }
}

export default App;
