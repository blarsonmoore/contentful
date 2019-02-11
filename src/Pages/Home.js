import React, { Component } from 'react';
import Slider1 from '../images/slider-one.jpg';
import './main.css';
import Client from './Client';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Carousel Section Starts Here */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Slider1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider1} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider1} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Carousel Section Starts Here */}
        <section id="feature">
          <div className="container text-center pt-4">
            <h2>Features</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              molestie odio sit amet est posuere elementum. Nulla hendrerit
              lectus urna, quis auctor velit varius nec.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-comments" />
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-leaf" />
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="container">
            <div className="container text-center pt-4">
              <h2>Portfolio</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                molestie odio sit amet est posuere elementum. Nulla hendrerit
                lectus urna, quis auctor velit varius nec.
              </p>
            </div>
          </div>
          <div className="comtainer">
            <input type="checkbox" id="pic-1" />
            <label for="pic-1" className="lightbox">
              <img src="http://unsplash.it/800/600?image=1" />
            </label>
            <input type="checkbox" id="pic-2" />
            <label for="pic-2" className="lightbox">
              <img src="http://unsplash.it/800/600?image=1" />
            </label>
            <input type="checkbox" id="pic-3" />
            <label for="pic-3" className="lightbox">
              <img src="http://unsplash.it/800/600?image=224" />
            </label>
            <input type="checkbox" id="pic-4" />
            <label for="pic-4" className="lightbox">
              <img src="http://unsplash.it/800/600?image=42" />
            </label>
            <input type="checkbox" id="pic-5" />
            <label for="pic-5" className="lightbox">
              <img src="http://unsplash.it/800/600?image=48" />
            </label>
            <input type="checkbox" id="pic-6" />
            <label for="pic-6" className="lightbox">
              <img src="http://unsplash.it/800/600?image=60" />
            </label>
            <input type="checkbox" id="pic-7" />
            <label for="pic-7" className="lightbox">
              <img src="http://unsplash.it/800/600?image=201" />
            </label>
            <input type="checkbox" id="pic-8" />
            <label for="pic-8" className="lightbox">
              <img src="http://unsplash.it/800/600?image=7" />
            </label>
            <input type="checkbox" id="pic-9" />
            <label for="pic-9" className="lightbox">
              <img src="http://unsplash.it/800/600?image=119" />
            </label>
            <input type="checkbox" id="pic-10" />
            <label for="pic-10" className="lightbox">
              <img src="http://unsplash.it/800/600?image=180" />
            </label>
            <input type="checkbox" id="pic-11" />
            <label for="pic-11" className="lightbox">
              <img src="http://unsplash.it/800/600?image=96" />
            </label>
            <input type="checkbox" id="pic-12" />
            <label for="pic-12" className="lightbox">
              <img src="http://unsplash.it/800/600?image=24" />
            </label>
            <div className="grid">
              <label for="pic-1" className="grid-item">
                <img src="http://unsplash.it/400/300?image=1" />
              </label>
              <label for="pic-2" className="grid-item">
                <img src="http://unsplash.it/400/300?image=20" />
              </label>
              <label for="pic-3" className="grid-item">
                <img src="http://unsplash.it/400/300?image=224" />
              </label>
              <label for="pic-4" className="grid-item">
                <img src="http://unsplash.it/400/300?image=42" />
              </label>
              <label for="pic-5" className="grid-item">
                <img src="http://unsplash.it/400/300?image=48" />
              </label>
              <label for="pic-6" className="grid-item">
                <img src="http://unsplash.it/400/300?image=60" />
              </label>
              <label for="pic-7" className="grid-item">
                <img src="http://unsplash.it/400/300?image=201" />
              </label>
              <label for="pic-8" className="grid-item">
                <img src="http://unsplash.it/400/300?image=7" />
              </label>
              <label for="pic-9" className="grid-item">
                <img src="http://unsplash.it/400/300?image=119" />
              </label>
              <label for="pic-10" className="grid-item">
                <img src="http://unsplash.it/400/300?image=180" />
              </label>
              <label for="pic-11" className="grid-item">
                <img src="http://unsplash.it/400/300?image=96" />
              </label>
              <label for="pic-12" className="grid-item">
                <img src="http://unsplash.it/400/300?image=24" />
              </label>
            </div>
          </div>
        </section>
        <section id="faqs">
          <div className="container text-center pt-4">
            <h2>FAQ</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              molestie odio sit amet est posuere elementum. Nulla hendrerit
              lectus urna, quis auctor velit varius nec.
            </p>
          </div>
          <div className="container mt-10">
            <h4>Accordion Style : Demo-3</h4>
            <div className="col-md-12">
              <div
                className="panel-group"
                id="accordion3"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne3">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapseOne3"
                        aria-expanded="true"
                        aria-controls="collapseOne3"
                      >
                        Section 1
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne3"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo3">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapseTwo3"
                        aria-expanded="false"
                        aria-controls="collapseTwo3"
                      >
                        Section 2
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo3"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree3">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapseThree3"
                        aria-expanded="false"
                        aria-controls="collapseThree3"
                      >
                        Section 3
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="spacer" />
      </div>
    );
  }
}
export default Home;
