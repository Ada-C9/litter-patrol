import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {

//props defined here are put in from app and they are accessed through {this. props.object key defined in the parent component that passed in the info}
  render() {
    // the && boolean is like a tertinary but with just the true option no else. //use  condition && code to execute (doesnt have to evaluate to true for it to execute only the condition before it on the && it executes b/c of JS magic that execudes html as it evaluates it for boolean condition (&&))
    return (
      <div className="bin">
      {this.props.showTrash && <img src={TrashIcon} alt="Trash" className="trash" onClick={this.props.onTrashClicked}></img>}
      </div>
    );
  }
}

export default Trash;
