# Getting Started With React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### App.js Example
```javascript

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
      </div>
      <footer>

      </footer>
    </div>
  );
}

```

In this App.js example, there are a number of other react components that are used alongside normal HTML/JSX tags.

React Components must start with a capital letter, by React conventions. In the case of the ```ExampleStatelessComponent```, a ```prop``` is passed in containing the string "Mark"

Taking a look at the code inside of the ```ExampleStatelessComponent.js``` itself, we can see that the component is just a function that returns some HTML/JSX code. It takes in an object 'props' that will contain all of those props that we attach in the parent component.

We can then use ```props.name``` to get the name value of Mark to print out when this component is rendered.
```javascript
const ExampleStatelessComponent = (props) => {
    return (
        <div>
            <span>Hello, {props.name}</span>
        </div>
    );
}
```
