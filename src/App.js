import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'; 
import TextField from '@material-ui/core/TextField';
import PieChart from 'react-minimal-pie-chart';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import BarChart from 'react-bar-chart';

var data = {
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
};

var dataBar = [
  {text: 'CocaCola', value: 60}, 
  {text: 'PwC', value: 50},
  {text: 'Amazon', value: 30},
];

const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
var sort = null; 

class App extends Component {
  
  constructor() {
    super();
    
    this.state = {
      LeaderboardLists: false,
    }
    
    this.LeaderboardLists = this.LeaderboardLists.bind(this);
  }
  
  LeaderboardLists(event) {
    event.preventDefault();
    
    this.setState({
      LeaderboardLists: true,
    });
  }

 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Preservize</h1>
        </header>
        
        <p className="enterCode">
          Enter the code to receive points
        </p>
        
        <TextField name = "code" autoComplete = "off" label = "code" maxlength = "8" className="text-right"/>
        
        <Button variant="contained" color="primary" type="submit">Submit</Button>
        
        <div style={{maxWidth: "500px", margin: "auto"}}>
          <p>Total points = 20</p>
          <PieChart radius = "20" 
            data={[
            { value: 10, color: '#E38627' },
            { value: 15, color: '#C13C37' },
            { value: 20, color: '#6A2135' }
            ]}
            />
        </div>
        
        <p className="enterActivity">
          Enter the activity to see the leaderboard
        </p>
        
        <TextField name = "activity" autoComplete = "off" label = "activity" maxlength = "8" />
        
        <Button variant ="contained" color = "primary"> Submit </Button>
        <div>      
          <Card>

            <CardHeader>Leaderboard</CardHeader>
            <Button onClick ={this.LeaderboardLists}>Leaderboard Lists</Button>
             {
              this.state.LeaderboardLists
              ? (
              <div className="menu">
                <button> Reusable Paper </button>
                <button> Voluteering at the WWF </button>
                <button> Buying Tesla </button>
              </div>
              )
              : (
              null
              )}

              <div>
                <div style = {{width: '50%'}}>
                  <BarChart ylabel = 'Points'
                  width = {500}
                  height={500}
                  margin = {margin}
                  data = {dataBar}
                  />
                </div>
              </div>
            


          </Card>
        </div>          


      </div>
    );
  }
}

export default App;