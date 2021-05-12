//Importando react
import React from 'react';
//Importando estilos
import '../assets/styles/components/Categories.scss';

//Creando componente
const Categories = ({children, title}) => {
    return (  
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    );
}

//Exportar componente
export default Categories;