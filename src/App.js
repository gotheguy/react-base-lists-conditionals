import React, { Component }  from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = ({
    textLength: 0,
    letters: []
  });

  textLengthHandler = (event) => {
    const input = event.target.value;
    const letters = input.split('');

    this.setState({textLength: input.length, letters: letters});
  }

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.letters];
    letters.splice(letterIndex, 1);
    this.setState({letters: letters});
  }

  render() {
    let letters = null;
    letters = (
      <div>
        {
          this.state.letters.map((letter, index) => {
            return <CharComponent key={index} letter={letter} click={() => this.deleteLetterHandler(index)} />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <input type="text" onChange={this.textLengthHandler.bind(this)} />
        <p>{this.state.textLength} characters</p>
        <ValidationComponent textLength={this.state.textLength} />
        {letters}
      </div>
    );
  }
}

export default App;
