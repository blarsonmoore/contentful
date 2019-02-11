import React, { Component } from 'react';
import client from './Client';
import Loader from '../images/loader/loader.gif';

class Services extends Component {
  constructor() {
    super();
    this.state = { servicepage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: 'services',
        order: 'sys.createdAt'
      })
      .then(entries => {
        this.setState({ servicepage: entries.items });
      });
  }

  render() {
    return (
      <div>
        <section id="services" className="p-4">
          <div className="container">
            <div>
              <h2 className="text-center">Services</h2>
              <p className="lead text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                viverra velit ante, vehicula bibendum dolor iaculis interdum.
                Quisque luctus elementum cursus. Cras mattis ultricies mi, ut
                molestie urna aliquam eget.
              </p>
            </div>

            {this.state.servicepage.length === 0 ? (
              <div align="center">
                <img src={Loader} alt="loader" />
              </div>
            ) : (
              <div className="row">
                {this.state.servicepage.map((item, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="media service-wrap">
                        <div>
                          <img
                            className="pr-3"
                            src={item.fields.serviceIcon.fields.file.url}
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h3>{item.fields.serviceTitle}</h3>
                          <p>{item.fields.serviceDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default Services;
