import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import { CardLIst } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      string: 'Nathan',
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }



  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick = {() => this.setState({ string: 'Kyle'})}>click to change</button>
       <SearchBox 
         placeholder= 'search monsters'
         handleChange= {e => this.setState({ searchField: e.target.value})}
         />

        <CardLIst monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
