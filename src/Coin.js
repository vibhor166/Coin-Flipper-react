import React, { Component } from 'react';

export class Coin extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.info.imgSrc}
          alt={this.props.info.side}
          style={myStyle}
        />
      </div>
    );
  }
}
const myStyle = {
  height: '150px',
  width: '150px'
};

export default Coin;
