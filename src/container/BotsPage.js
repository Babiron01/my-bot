import React, { Component } from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

class BotsPage extends Component {
  
  
  state= {
    bots: [],
    favoriteBots: []
  }

  componentDidMount(){
    this.getBots();
  }

  getBots() {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(bots => {
        console.log(bots);
        this.setState({
          bots: bots
        });
      });
  }

  handleDelete() {

  }

  handleFavorite() {
    
  }

  render() {
    return (<div>
      <YourBotArmy bots={this.state.favoriteBots}/>
      <BotCollection bots={this.state.bots}/>
    </div>);
  }
}

export default BotsPage;
