import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/forest.jpg'
import dforestImg from '../assets/dforest.jpg'
import bforestImg from '../assets/bforest.jpg'

export default class Header extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={forestImg}
                        alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Fores image</h3>
                        <p>Какой-то текст</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={dforestImg}
                        alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Fores image</h3>
                        <p>Какой-то текст</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={bforestImg}
                        alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Fores image</h3>
                        <p>Какой-то текст</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            
        )
    }
}    