
import store from '../store';
import { TIPO_PREGUNTA, TIPO_RESPUESTA } from '../configuracion';

export const guardarPregunta = (mensaje) => {
    store.update(s => {
        s.chat.push({ tipo: TIPO_PREGUNTA, mensaje });
    });
};

export const guardarRespuesta = (mensaje) => {
    store.update(s => {
        s.chat.push({ tipo: TIPO_RESPUESTA, mensaje });
    });
};

