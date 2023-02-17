import { Component } from 'react';


import './App.css';

class App extends Component{
  constructor(){
    super();
    
   this.state = {
    monsters: [
      {
        name:'Linda',
        id: '4788dfg7'
      },
      {
        name: 'Frank',
        id: '4788dfg8'
      },
      {
        name:'Jacky',
        id: '4799dfg7'
      },
      {
        name:'Andrei',
        id: '75898dfg7'
      },
    ]
  };
}

  render(){ 
    return (
    <div className="App">

    {this.state.monsters.map((monster) => {
      return (
      <div key={monster.id}> 
      <h1>{monster.name}</h1>
      </div>
      );
    })} 
    </div>
  );
}
}
export default App;
