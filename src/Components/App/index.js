import React, { Component } from 'react';
import './App.css';
import ListChampions from '../ListChampions';

class App extends Component {
  render() {
    return (
        <div className='bg-dark'>
            {/* <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}

            <ListChampions/>
        </div>
    );
  }
}

export default App;
