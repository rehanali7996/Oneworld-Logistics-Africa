import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Homecarousel(){
        return(
          <div className="content">
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/slide1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/slide2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/slide3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </div>
        )
    }
