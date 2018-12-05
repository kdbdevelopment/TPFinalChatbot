
export default class Bot {

    CHARLAS = [
        {
            pattern: ['hola', 'buenas', 'hello'],
            mensaje: 'Hola cómo estas? En que podemos ayudarte?'
        },
        {
            pattern: ['jugar', 'jugamos', 'divertirnos'],
            mensaje: 'No soy una Play-Station, pero podemos divertirnos igual! ;).'
        },
        {
            pattern: ['saber', 'consultar', 'informacion', 'necesito'],
            mensaje: 'Ya lo buscaste en Google?'
        },
        {
            pattern: ['amigo', 'amiga', 'amigos', 'amigas'],
            mensaje: 'Podemos ser amigos!'
        },
        {
            pattern: ['si', 'claro', 'supuesto'],
            mensaje: 'Entonces olvidate! No debe existir la respuesta.'
        },
        {
            pattern: ['no', 'nunca'],
            mensaje: 'Probá buscando en www.google.com. Hasta la próxima!'
        },
        {
            pattern: ['chau', 'hasta luego', 'hasta la proxima'],
            mensaje: 'Chau! que tengas un buen día!'
        }
    ];

    chat(texto) {
        const matchingPattern = this.CHARLAS.find((item) => {
            let matcheo = false;

            item.pattern.forEach((pattern) => {
                if (String(texto.toLowerCase()).indexOf(pattern) !== -1) {
                    matcheo = true;
                }
            });
            
            return matcheo;
        });

        if(matchingPattern){
            return matchingPattern.mensaje; 
        }

        return 'Lo siento! no se lo que decís. Podrias decirlo con otras palabras?';
    }

}