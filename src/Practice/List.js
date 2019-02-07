import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.students.map((name, index) => (
            <li key={index}>
              {name}
              <button
                onClick={() => {
                  this.props.onRemoveName(name);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;
