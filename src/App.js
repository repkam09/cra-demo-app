import React from 'react';
import './App.css';
import ExampleFormComponent from "./Components/ExampleFormComponent";
import ExampleStatelessComponent from "./Components/ExampleStatelessComponent";
import ExampleDynamicComponent from "./Components/ExampleDynamicComponent";
import ExampleButtonComponent from "./Components/ExampleButtonComponent";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <span>Example Text</span>
      </header>
      <div className="app-example-components-wrapper">
        <ExampleFormComponent />
        <ExampleStatelessComponent name="Mark" />
        <ExampleDynamicComponent />
        <ExampleButtonComponent />
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
