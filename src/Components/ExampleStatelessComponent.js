import React from 'react';
import "./ExampleComponent.css";

/**
 * This is the most simple type of component you can make. 
 * 
 * It has no state of its own, can only take Props from its parent,
 * and simply returns some JSX/HTML to render, substituting in some value for name
 */
const ExampleStatelessComponent = (props) => {
    return (
        <div className="example-wrapper example-stateless-component">
        <h3>ExampleStatelessComponent.js</h3>
            <span>Hello, {props.name}</span>
        </div>
    );
}

// Export this stateless functional component so it can be used by others
export default ExampleStatelessComponent;