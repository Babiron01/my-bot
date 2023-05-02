import React, { Component } from "react";
import BotCard from '../components/BotCard';
import BotSpecs from '../components/BotSpecs';

class BotCollection extends Component {
  
  render() {
    
    console.log(`these are the bots:${this.props.bots}`)
    return (
      <div className="ui four column grid">
        <div className="row">
      
          Collection of all bots
          {Object.keys(this.props.bots).map((key, index) => {
            return (<div>
              <BotCard bot={this.props.bots[index]} />
            </div>)
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;