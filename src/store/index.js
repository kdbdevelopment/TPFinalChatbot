import createStore from 'pure-store';

const store = createStore({
    chat: [],
    pregunta: '',
    error:'',
});

export default store;