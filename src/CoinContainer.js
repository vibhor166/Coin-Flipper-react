import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';
export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      flips: 0,
      heads: 0,
      tails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      let newState = {
        ...st,
        currCoin: newCoin,
        flips: st.flips + 1,
        heads: st.heads + (newCoin.side === 'heads' ? 1 : 0),
        tails: st.tails + (newCoin.side === 'tails' ? 1 : 0)
      };

      return newState;
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h2>Coin Flipper</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!!</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads}{' '}
          heads and {this.state.tails} tails{' '}
        </p>
      </div>
    );
  }
}

export default CoinContainer;
