import React from 'react';
import "./ExampleComponent.css";

class ExampleFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { count: 0 };
        this.countUpButtonHandler = this.countUpButton.bind(this);
        this.countUpButtonResetHandler = this.countUpButtonReset.bind(this);
    }

    countUpButton() {
        const currentCount = this.state.count;
        this.setState({ count: currentCount + 1 });
    }

    countUpButtonReset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div className="example-wrapper example-button-component">
                <h3>ExampleButtonComponent.js</h3>

                <button onClick={this.countUpButtonHandler}>
                    <span>Count Up</span>
                </button>

                <button onClick={this.countUpButtonResetHandler}>
                    <span>Reset Count </span>
                </button>

                <br />

                <span>You have pressed the button {this.state.count} times</span>
            </div>
        )
    }
}


export default ExampleFormComponent;