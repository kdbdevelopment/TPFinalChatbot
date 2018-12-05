import React from 'react';
import store from '../store';
import { guardarPregunta, guardarRespuesta   } from '../acciones';
import { TIPO_PREGUNTA, TIPO_RESPUESTA } from '../configuracion';
import Bot from '../servicios/bot';


var classNames = require('classnames');


const bot = new Bot();

export default class Chat extends React.Component{

    KEY_CODE = 13;
    constructor(props){
        super(props);
        this.state = {
            preguntaInput: ''
        }
    }
    
    cambiarInput = (event) => {
        console.log( event.target.value);
        this.setState({
            preguntaInput: event.target.value,
        })
    }
    detectarEnter = (event) => {
        
        if (event.keyCode === this.KEY_CODE) {
            
            guardarPregunta(event.target.value);
            
            guardarRespuesta(bot.chat(event.target.value));
            

            this.setState({
                preguntaInput: '',
            })
        }
    }


    render(){

        const { chat, pregunta } = store.getState();
        const { preguntaInput } = this.state;
       
        return(

            <main>
                <h1 class="titulo">¡¡Bienvenido a ChatBoot!!</h1>
                <ul>
                <li><h2>Hablá con nuestro bot</h2></li>
                <li><h2>Divertite!</h2></li>
                <li><h2>Sacate todas tus dudas</h2></li>
                </ul>
                    <div  className="respuesta">
                    {chat.map( respuesta => <p className={classNames({ pregunta: respuesta.tipo === TIPO_PREGUNTA })} >{respuesta.mensaje}</p>)}
                    </div>
                <div class="input"> 
                <input value={preguntaInput} placeholder="Escribile tu pregunta!"onChange={event => this.cambiarInput(event) } onKeyDown={event => this.detectarEnter(event)} type='text' name='respuesta' />
                </div>
            </main>
        )
    }
    
}