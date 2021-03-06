import React, { Component } from 'react';
import client from './Client';
import BlackLoader from '../images/loader/black-loader.gif';

class About extends Component {
  constructor() {
    super();
    this.state = { aboutpage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: 'about'
      })
      .then(entries => {
        this.setState({ aboutpage: entries.items[0] }); //200
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center">About Us</h2>
          {this.state.aboutpage.length === 0 ? (
            <div>
              {' '}
              <img align='center' src={BlackLoader} alt='blackLoader'/>
            </div>
          ) : (
            <p>{this.state.aboutpage.fields.aboutDescription}</p>
          )}
        </div>
      </div>
    );
  }
}
export default About;
