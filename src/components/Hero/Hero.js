import React from 'react';
import MyMovie4 from '../../assets/video/MyMovie4.mp4'
import classes from './Hero.module.css'
import Navbar from "../../containers/Navbar/Navbar";

export default function Hero() {
    return (
        <div className={classes.hero_container}>
            <Navbar/>
            <video
                className={classes.hero_video}
                autoPlay
                loop
                muted
            >
                <source
                    src={MyMovie4}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}