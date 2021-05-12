//Importando React
import React, {useState, useEffect} from 'react';
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
//Importando el custom hook
import useInitialState from '../hooks/useInitialState';

//Importando Styles
import '../assets/styles/App.scss';

const API='http://localhost:3000/initialState/';

//Creando componente
const App = () => {
    const initialState=useInitialState(API);

    return ( 
        <div className="App">
            <Header />
            <Search />

            {
                //Validando si la lista de videos es mayot a 0
                initialState.mylist.length > 0 
                ?
                    <Categories
                        title='Mi lista'
                    >
                        <Carousel>
                            {
                                //Mapeo para tener la informacion de cada video
                                initialState.mylist.map(item=>(
                                    <CarouselItem 
                                        //Key para identificarlo
                                        key={item.id}
                                        {...item}
                                    />
                                ))
                            }
                            <CarouselItem />
                        </Carousel>
                    </Categories>
                :
                    null
            }
        
            <Categories
                title='Tendencias'
            >
                <Carousel>
                    {
                        //Mapeo para tener la informacion de cada video
                        initialState.trends.map(item=>(
                            <CarouselItem 
                                //Key para identificarlo
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                    
                </Carousel>
            </Categories>

            <Categories
                title='Originales de Platzi Video'
            >
                <Carousel>
                    {
                        //Mapeo para tener la informacion de cada video
                        initialState.originals.map(item=>(
                            <CarouselItem 
                                //Key para identificarlo
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </Carousel>
            </Categories>

            <Footer />
        </div>  
    );
}

//Exportando componente
export default App;