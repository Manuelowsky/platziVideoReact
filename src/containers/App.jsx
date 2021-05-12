//Importando React
import React from 'react';
//Importando componente Header
import Header from '../components/Header';
//Importando componente Search
import Search from '../components/Search';
//Importando componente Categories
import Categories from '../components/Categories';
//Importando componente Carousel
import Carousel from '../components/Carousel';
//Importando componente Carousel Item
import CarouselItem from '../components/CarouselItem';
//Importando componente Footer
import Footer from '../components/Footer';

//Importando Styles
import '../assets/styles/App.scss';

//Creando componente
const App = () => {
    return ( 
        <div className="App">
            <Header />
            <Search />

            <Categories
                title='Mi lista'
            >
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories
                title='Tendencias'
            >
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories
                title='Originales de Platzi Video'
            >
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>  
    );
}

//Exportando componente
export default App;