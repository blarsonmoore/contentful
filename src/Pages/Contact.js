import React, { Component } from 'react';
import Client from './Client';

class Contact extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div>
              <h2 className="text-center">Drop Your Message</h2>
              <p className="lead text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className='contact-form'>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdk8i49vLLSQZ2aeS29RzF8cDhqLvjTOkQ9FaHpbIjOxIiTlQ/viewform?embedded=true"
                width="640"
                height="490"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
