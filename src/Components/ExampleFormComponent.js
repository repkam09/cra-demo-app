import React from 'react';
import "./ExampleComponent.css";

class ExampleFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="example-wrapper example-form-component">
                <h3>ExampleDynamicComponent.js</h3>

                <form onSubmit={this.handleSubmit}>
                    <span>
                        Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </span>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <span>Because this is a real form, you can also submit by pressing the enter key</span>
            </div>
        );
    }
}


export default ExampleFormComponent;
