//Importando react
import React from 'react';
//Importando estilos
import '../assets/styles/components/Header.scss';
//Importando imagenes
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

//Creando componente
const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="Platzi Video" />
            <div className="header__menu">
                <div className="header__menu--profile">
                        <img src={userIcon} alt="" />
                        <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    );
}

//Exportando componente
export default Header;