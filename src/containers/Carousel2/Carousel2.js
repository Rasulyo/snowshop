import React from 'react';
import {Carousel} from "react-bootstrap";
import fourth from '../../assets/Carousel2/1.jpg'
import fifth from '../../assets/Carousel2/2.jpg'
import sixth from '../../assets/Carousel2/3.jpg'



const Carousel2 = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fourth}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{color: "black"}}>
                        <h2>BURTON</h2>
                        <p>Burton Snowboards for Experts</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fifth}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{color: "black"}}>
                        <h2>K2 SKIS</h2>
                        <p>K2 skis for freeride</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sixth}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{color: "black"}}>
                        <h3>POW Skis</h3>
                        <p>Skis for backcountry and freeride</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousel2;
