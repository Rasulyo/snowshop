import React from 'react';
import Content from './Content';
import Hero from "../../components/Hero/Hero";
import CarouselHome from "../Carousel/CarouselHome";
import Carousel2 from '../Carousel2/Carousel2'
import SimpleMap from "../Map/SimpleMap";
import FooterPagePro from "../Footer/Footer";




const Home = () => {
    return (
        <div>
            <Hero>
            <Content/>
            </Hero>
            <CarouselHome/>
            <SimpleMap/>
            <Carousel2/>
            <FooterPagePro/>
        </div>
    );
};

export default Home;