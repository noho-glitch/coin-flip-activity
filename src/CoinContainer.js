import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://www.usmint.gov/wordpress/wp-content/uploads/2020/01/2020-roosevelt-dime-uncirculated-obverse-denver-300x300.jpg" },
            { side: "tails", imgSrc: "https://www.usmint.gov/wordpress/wp-content/uploads/2020/01/2020-roosevelt-dime-uncirculated-reverse-300x300.jpg" }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(oldState => {
          return {
            currCoin: newCoin,
            nFlips: oldState.nFlips + 1,
            nHeads: oldState.nHeads + (newCoin.side === "heads" ? 1 : 0),
            nTails: oldState.nTails + (newCoin.side === "tails" ? 1 : 0)
          };
        });
      }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
          <div className='CoinContainer'>
            <h2>Let's Flip A Coin!</h2>
            <button onClick={this.handleClick}>Flip the coin!</button>
            {this.state.currCoin && <Coin info={this.state.currCoin} />}
            <p>
              Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
              heads and {this.state.nTails} tails.
            </p>
          </div>
        );
      }
}

export default CoinContainer;