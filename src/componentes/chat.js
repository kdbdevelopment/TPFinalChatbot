import React from 'react';
import store from '../store';
import { guardarPregunta } from '../acciones';

export default class Chat extends React.Component{

    KEY_CODE = 13;

    detectarEnter(event){
        if (event.keyCode === this.KEY_CODE) {
            guardarPregunta(event.target.value);
        }
    }

    render(){

        const {respuesta}=store.getState().chat;
        
return(

    <main>
        <h1>Mensajes</h1>

            {chat.map(r => <p>{r}</p>)};

        <div>
        <input onKeyDown ={event => this.detectarEnter(event)} type='text' name='respuesta' value={respuesta}/>
        </div>
    </main>
)
    }
    
}