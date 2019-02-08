import React, { Component } from 'react';
import Slider1 from '../images/slider-one.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Carousel Section Starts Here */}
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={Slider1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Slider1} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Slider1} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* Carousel Section Starts Here */}
        <section id="feature">
          <div className="container">
            <h2>Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie odio sit amet est posuere
              elementum. Nulla hendrerit lectus urna, quis auctor velit varius nec.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
