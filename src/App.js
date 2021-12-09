import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import { CardLIst } from './components/card-list/card-list.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      string: 'Nathan',
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick = {() => this.setState({ string: 'Kyle'})}>click to change</button>
        <CardLIst monsters = { this.state.monsters} />
      </div>
    );
  }
  
}

export default App;
