import React from 'react';

class ExampleDynamicComponent extends React.Component {

    constructor() {
        super();

        // Hook up (or bind) 'this' so we can call setState from the event handler, if needed
        this.handleOptionClickedEvent = this.handleOptionClicked.bind(this);

        // Create some initial state that has nothing, because we have not loaded any API data yet
        // This will be replaced later with real data once loadApiData finishes.
        this.state = { api_data: null };

        // Start the API data update when the component is created
        this.loadApiData();
    }

    // Pulls the API data from some endpoint when the compnent is mounted to the screen.
    loadApiData() {
        fetch("https://api.repkam09.com/repcast/spaces/getfilestest/").then(result => {
            return result.json();
        }).then(json => {
            this.setState({ api_data: json });
        });
    }

    // This handler tells us which file was clicked on in the list.
    handleOptionClicked(file, rawEvent) {
        alert("You clicked on " + file.name);
    }

    render() {
        // Display some loading message while the API request is going...
        let apiresults = (
            <span>Loading....</span>
        );

        // Check if we have some API data loaded yet...
        if (this.state.api_data) {
            // If we do, overwrite the loading message above with the real data!
            apiresults = this.state.api_data.info.map(file => {
                // For each file in the list, create a div with some name to display on page.
                return (
                    <div onClick={(event) => this.handleOptionClickedEvent(file, event)}>
                        <span>
                            {file.name}
                        </span>
                    </div>
                )
            });
        }

        // Create the actual final page layou, just a wrapper, a title, and the list of files.
        return (
            <div className="dynamic-list-wrapper">
                <h3>
                    Movie List
                </h3>
                {apiresults}
            </div>
        )
    }
}


export default ExampleDynamicComponent;