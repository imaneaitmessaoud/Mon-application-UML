import React from 'react';
import './App.css';
import GraphComponent from './GraphComponent';
import Toolbox from './Toolbox';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Mon Application UML</h1>
            </header>
            <div className="app-body">
                <Toolbox />
                <GraphComponent />
            </div>
        </div>
    );
}

export default App;
