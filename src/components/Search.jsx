//Importanto react
import React from 'react';
//Importando componente
import '../assets/styles/components/Search.scss';

//Creando componente
const Search = () => {
    const mainTitle='¿Qué quieres ver hoy?'
    return (  
        <section className="main">
            <h2 className="main__title">{mainTitle}</h2>
            <input type="text" className="input" placeholder="Buscar..." />
        </section>
    );
}

//Exportando componente
export default Search;