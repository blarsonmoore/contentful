import React, { Component } from 'react';
import Slider1 from '../images/slider-one.jpg';
import './main.css';

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
          <div className="container text-center pt-4">
            <h2>Features</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie odio sit amet est posuere
              elementum. Nulla hendrerit lectus urna, quis auctor velit varius nec.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-comments" />
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-leaf" />
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop" />
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie odio sit amet est posuere
                elementum. Nulla hendrerit lectus urna, quis auctor velit varius nec.
              </p>
            </div>
          </div>
          <div className="comtainer">
            <input type="checkbox" id="pic-1" />
            <label for="pic-1" class="lightbox">
              <img src="http://unsplash.it/800/600?image=1" />
            </label>
            <input type="checkbox" id="pic-2" />
            <label for="pic-2" class="lightbox">
              <img src="http://unsplash.it/800/600?image=1" />
            </label>
            <input type="checkbox" id="pic-3" />
            <label for="pic-3" class="lightbox">
              <img src="http://unsplash.it/800/600?image=224" />
            </label>
            <input type="checkbox" id="pic-4" />
            <label for="pic-4" class="lightbox">
              <img src="http://unsplash.it/800/600?image=42" />
            </label>
            <input type="checkbox" id="pic-5" />
            <label for="pic-5" class="lightbox">
              <img src="http://unsplash.it/800/600?image=48" />
            </label>
            <input type="checkbox" id="pic-6" />
            <label for="pic-6" class="lightbox">
              <img src="http://unsplash.it/800/600?image=60" />
            </label>
            <input type="checkbox" id="pic-7" />
            <label for="pic-7" class="lightbox">
              <img src="http://unsplash.it/800/600?image=201" />
            </label>
            <input type="checkbox" id="pic-8" />
            <label for="pic-8" class="lightbox">
              <img src="http://unsplash.it/800/600?image=7" />
            </label>
            <input type="checkbox" id="pic-9" />
            <label for="pic-9" class="lightbox">
              <img src="http://unsplash.it/800/600?image=119" />
            </label>
            <input type="checkbox" id="pic-10" />
            <label for="pic-10" class="lightbox">
              <img src="http://unsplash.it/800/600?image=180" />
            </label>
            <input type="checkbox" id="pic-11" />
            <label for="pic-11" class="lightbox">
              <img src="http://unsplash.it/800/600?image=96" />
            </label>
            <input type="checkbox" id="pic-12" />
            <label for="pic-12" class="lightbox">
              <img src="http://unsplash.it/800/600?image=24" />
            </label>
            <div class="grid">
              <label for="pic-1" class="grid-item">
                <img src="http://unsplash.it/400/300?image=1" />
              </label>
              <label for="pic-2" class="grid-item">
                <img src="http://unsplash.it/400/300?image=20" />
              </label>
              <label for="pic-3" class="grid-item">
                <img src="http://unsplash.it/400/300?image=224" />
              </label>
              <label for="pic-4" class="grid-item">
                <img src="http://unsplash.it/400/300?image=42" />
              </label>
              <label for="pic-5" class="grid-item">
                <img src="http://unsplash.it/400/300?image=48" />
              </label>
              <label for="pic-6" class="grid-item">
                <img src="http://unsplash.it/400/300?image=60" />
              </label>
              <label for="pic-7" class="grid-item">
                <img src="http://unsplash.it/400/300?image=201" />
              </label>
              <label for="pic-8" class="grid-item">
                <img src="http://unsplash.it/400/300?image=7" />
              </label>
              <label for="pic-9" class="grid-item">
                <img src="http://unsplash.it/400/300?image=119" />
              </label>
              <label for="pic-10" class="grid-item">
                <img src="http://unsplash.it/400/300?image=180" />
              </label>
              <label for="pic-11" class="grid-item">
                <img src="http://unsplash.it/400/300?image=96" />
              </label>
              <label for="pic-12" class="grid-item">
                <img src="http://unsplash.it/400/300?image=24" />
              </label>
            </div>
          </div>
        </section>
        <section id="faqs">
          <div className="container text-center pt-4">
            <h2>FAQ</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie odio sit amet est posuere
              elementum. Nulla hendrerit lectus urna, quis auctor velit varius nec.
            </p>
          </div>
          <div class="container mt-10">
            <h4>Accordion Style : Demo-3</h4>
            <div class="col-md-12">
              <div class="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne3">
                    <h4 class="panel-title">
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
                  <div id="collapseOne3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id
                        pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac
                        justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur
                        molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo3">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
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
                  <div id="collapseTwo3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo3">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id
                        pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac
                        justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur
                        molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree3">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
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
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                  >
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id
                        pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac
                        justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur
                        molestie eros.{' '}
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
