//Importando los hooks necesarios
import {useState, useEffect} from 'react';

//Creando custom hook
const useInitialState=(API)=>{
    //UseState para actualizar el estado de videos
    const [videos, setVideos] = useState({
        'mylist':[],
        'trends':[],
        'originals':[]
    });
        
    //UseEffect se ejecuta cuando se actualiza un componente o parte del código en especifico
    useEffect(() => {
        //Recibiendo API
        fetch(API)
            //Transformar respuesta en json
            .then((response) => response.json())
            //Enviando los datos a set video
            .then((data) => setVideos(data));
    }, []);

    //console.log(videos);

    //Retornando el state
    return videos;
}

//Exportando el custom hook
export default useInitialState;