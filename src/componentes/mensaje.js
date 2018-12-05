import React from 'react';
import store from '../store';
import { realpathSync } from 'fs';

export default class mensaje extends React.Component{

    render(){

        const {mensaje}=store.getState().chat;
        
return(

    <main>

    </main>
  
    
);

    }
    
}
