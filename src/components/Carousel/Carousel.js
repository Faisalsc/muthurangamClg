import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../assests/1.jpg"
import image2 from "../assests/2.jpg"
import image3 from "../assests/3.jpg"
export default class CarouselComponent extends Component {
    render() {
        return (
            <Carousel showThumbs={false} dynamicHeight={false} autoPlay={false}>
                <div>
                    <img src={image1} height={300} width={200} />
                    
                </div>
                <div>
                    <img src={image2} height={300} width={200} />
                    
                </div>
                <div>
                    <img src={image3} height={300} width={200} />
                </div>
            </Carousel>
        );
    }
}