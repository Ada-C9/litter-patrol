import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

  //count down of 1500 miliseconds for moving the trash?
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }
  // changes bins state where their state is an array of t/f
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      //random generates # 0 to 1 and 0 evaluates to false
      bins.push({
        isTrashVisible: (Math.round(Math.random()) ? true : false )
      });

    }

    return bins;
  }

  onTrashClicked = () => {
    this.setState({
      points: this.state.points + 3
    });
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        //doesn't affect props it is just to help react sort this component on this page
        <Trash key={`trash-${index}`}
        // this prop is defined by the showTrash key here and accessed in the Trash component via this.props.showTrash
          showTrash={bin.isTrashVisible}
        />
      );
    });

    return (
      <div className="App">
      <section className="overall-data">
      <h1>Litter Patrol</h1>
      <h2>Points: { this.state.points }</h2>
      </section>

      <section className="bins">
      { bins }
      </section>
      </div>
    );
  }
}

export default App;
