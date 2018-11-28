# Udemy - Modern react with Redux [2019 update]

1. Started at: 25/nov/18
2. Bought at: 11/aug/18
3. Finished at: -
4. Source code: 

# Ref

1. https://reactjs.org/
2. https://www.udemy.com/react-redux/

# Schedule

# 25/nov/18 - Lets Dive in!

## lectures 1,2,3,4. - What is React

1. Library focused on user interaction.
2. React is a library and React-DOM is another.
3. Based on components.
4. Uses npm, for example:  "npm install -g create-react-app".


## lectures 5, 6. Generating a react project

> npm (Runs npm) , install (Command to NPM), -g (Install this package globally, so we can run from anywhere, terminal etc), create-react-app (name of the package we want).

> create project with "create-react-app project-name" or "npx create-react-app project-name".

> Babel, (Javascript updates does not follow browsers supports), babel takes any javascript and convert to javascript ES5, like ES2018 -> ES5. Babel have a huge number of packages, this is the reason of many dependencies in a generated project.

## lecture 7. Exploring a create-react-app project

> src : Folder where we put all the source code we write.

> public :  Folder that stores static files, like images.

> node_modules : Folder that contains all of our project dependencies.

> package.json : Records our project dependencies and configures our project.

> package-lock.json :  Records the exact version of packages that we install.

> README.md : Instructions on how to use this project.


## lecture 8. Starting and Stopping a React App

> stopping the react app -> CTRL+C on terminal that is running the react app.

> starting the react app -> runs npm start on our project directory.


## lecture 9. Javascript Module Systems

1. Erase all files in src.
2. Create a index.js file.
3. Add the follow snippet on the index.js, this sintax means:  

Look inside node_modules a folder called react and import it with React alias.
Look inside node_modules a folder called react-dom and import it with ReactDOM alias.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```

> import 'alias' from 'library/foldername' > CommonJS Modules
> require('library/foldername') > ES2015 Modules

1. import -> We want to get code from some other file or dependency.
2. 'React' -> The variable we want to assign this import to.
3. 'from' -> We are about to specify the name of the library or file we are importing from.
4. 'react'-> The name of the dependency or path of the file we want, we are importing.

## lecture 10. Displaying content with functional components.

React component is a function or a class, that produces HTML to show the user .


1. Lets create a component called App what returns a div with the txt 'hi there':

```javascript
const App = () => {
    return <div>Hi there!</div>;
};
```

2. Lets show this component on the screen, using ReactDOM.

```javascript
ReactDOM.render(
    <App/>, document.querySelector('#root')
);
```

3. '<App/>' is the name of the react component, and #root is the div present in public/index.html that we want to put the component.

## lecture 11. Link to Completed Github Repo.

If you get stuck at any point in time in this course, you can always compare your code against the completed version of each project.

The completed code for each project can be found here: https://github.com/StephenGrider/reduxcode

# 25/nov/18 - Building Content with JSX!

## lecture 12. What is JSX.

First of all, the browser does not understand what .jsx is, so babel comes in, it is a javascript compiler. Its convert any jsx or js newers versions to ES5.

The JSX sintax is create to make easier to wrote the react sintax.

> visit babeljs.io for more details. There you can see what js is generated by your jsx snippet.

Example 1:

Easier way:

```javascript
const App = () => {
    return <div>Hi there!</div>;
};
```
its converted to hard way:

```javascript
"use strict";
var App = function App() {
    return React.createElement(
        "div",
        null,
        "Hi there!"
    );
};
```
Example 2:

Easier way:


```javascript
const App = () => {
    return 
      
      <div>
        <div>Hi there!</div>
          <ul>
            <li> Oi </li>
            <li> Babel </li>
            <li> Under the </li>
            <li> Hood </li>
        </ul>
      </div>;
      
      
};
```
its converted to hard way:

```javascript
"use strict";
var App = function App() {
  return;

  React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      "Hi there!"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        " Oi "
      ),
      React.createElement(
        "li",
        null,
        " Babel "
      ),
      React.createElement(
        "li",
        null,
        " Under the "
      ),
      React.createElement(
        "li",
        null,
        " Hood "
      )
    )
  );
};
```

## lecture 13. Converting HTML to JSX.

1. HTML != JSX.
2. JSX isn't HTML.
3. We can conver HTML to JSX.


### Steps

> Use codepen.io to write some HTML.

> Create BTN -> new PEN.

> Write some html like https://codepen.io/giuseppemp/pen/zMaoXZ.

```html
<div>
 
  <label for="name" class="label">Enter name</label>
  <input id="name" type="text"/>
  <button style="background-color:blue; color:white">Save</button>
  
</div>
```

4. change return of App component for that html snippet.

5. An error is expected, because HTML isn't JSX.


## lecture 14. Inline Styling with JSX.

### HTML vs JSX

Adding custom style to component have different syntax.

HTML:

```html
  <button style="background-color:blue; color:white">Save</button>
```
JSX:

```jsx
    <button style={{backgroundColor:'blue', color:'white'}}>Save</button>
```

We need to convert properties name from baby-case to camelCase like:  first-name -> firstName, background-color -> backgroundColor and so on.


## lecture 15. Converting Styling to JSX Format

Steps.

1. Change " " to {{ }}.
2. Look for properties with babe-case and convert to camelCase.
3. Change separator ; properties for , .
4. Make sure the values of properties are wrapped by simple quote, '' or double quotes " " .
5. Ex: before: style="background-color:blue; color:white" after: style={{backgroundColor:'blue', color:'white'}} .


## lecture 16. class vs className

Adding a class to an element uses different syntax.

```html
<label for="name" class="label">Enter name</label>
```

This is snippet needs to change to:

```html
<label for="name" className="label">Enter name</label>
```

The reason os this is because the keyword class is a reserved keyword in js, so, this is just to avoid conflicts between css keywords vs js keywords.

> Today have a discution in communitty about create the support of 'class' inside JSX.

## lecture 17. Referencing JS Variables in JSX.

We can reffer js variables or functions in JSX using {} (brackets).

```jsx
const buttonText = 'Click Me!';

function getBtnText(){
    return "Click on Me!";
}


<button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>

<button style={{backgroundColor:'blue', color:'white'}}>{getBtnText()}</button>


``` 

## lecture 18. Values JSX Can't Show.


Some values cant be used on JSX. We can use a lot of types on variable, like:

1. Array of Numbers : const buttonText = [10,20];
2. Array of Strings : const buttonText = ['Hi','There'];
3. String : const buttonText = 'Hi there';
4. Numbers : const buttonText = 123;

All examples above works, but exists a particularity that doesn't works, the use of an object:

```jsx
const buttonText = {text:'Click me'};

Error:
<button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>

Works:
<button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
```

## lecture 19. Finding Forbidden Property Names.

Exists properties that are forbidden, we must keep our browser console open to see warning messages of this kind of errors, for example:

```javascript
Warning: Invalid DOM property `for`. Did you mean `htmlFor`?
    in label (at src/index.js:14)
    in div (at src/index.js:13)
    in App (at src/index.js:23)
```

So, 'for', it is a forbidden HTML property we must fix:

```jsx
    error:
    <label for="name" className="label">{labbelText}</label>
    works:
    <label htmlFor="name" className="label">{labbelText}</label>
```

## lectures 20, 21. Exercise Introduction, Coding Exercise 1: JSX Interpolation.

Solution:

```jsx
<script type="text/babel" data-presets="env,react">
    function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    // Creates a functional component
    const App = () => {
        return (
            <div>
                <div>Current Time:</div>
                <h3>{getTime()} PM</h3>
            </div>
        );
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>

```

# 25/nov/18 - Communicating with Props!


## lecture 22. Three Tenets of Components.

In react there are three tenets we must know, we create a component at time, but a typical react app is a set of component inside each other.

> Component Nesting - A component can be shown inside of another.

> Component Resuability - We want to make components that can be easily reused through out application.

> Component Configuration - We should be able to configure a component when it is created.

## lecture 23. Application Overview.

Lets generated another project by sides 'jsx' project. lets use create-react-app components.

We going to build a comments component.

## lecture 24. Getting Some Free Styling.

Lets create comments box.

1. Erase all files in src folder to make from scratch.

2. We dont want to lose much time with css, so, go to semantic-ui.com to get some default styles.

3. Search for comments.

4. Lets install semantic ui using cdn to be much easier for us. https://cdnjs.com/libraries/semantic-ui

5. Find for semantic-ui.css.min

6. Inside folder public, find for index.html and add the css https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css;

```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
```

## lecture 25. Naive Component Approach.

Create comment html block code.


## lecture 26. Specifying images in JSX.

Lets use faker js, open library that helps you to generate a lot of fake data.

>https://github.com/marak/Faker.js/

We can fake a lot of things, almost everything. Lets use to fake avatars to our comments component.

Lets install it:

1. Stop running project.
2. Run npm install --save faker.

> --save flag means we are saving this dependency in our local project.

3. import Faker on index.js

```jsx
    import Faker from 'faker';
```

4. Usage may based on documentation where image.avatar generateds a fake avatar for us.               

```jsx
<img alt="avatar" src={Faker.image.avatar()}/>
```

## lecture 27. Duplicating a Single Component.

We need to duplicate all JSX to each comment, this is painful, the file becomes larges and we dont know what hack we are looking at.

Next lecture we going to refactor this.

## lecture 28. Extracting JSX to New Components.

Creating a Reusable & Configurable Component.

1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? Think of a descriptive name for what i does.
3. Create a new file to house this new component - it should have the same name as the component.
4. Create a new component in the new file, paste the JSX into it.
5. Make the new component configurable by using React's 'props' system.
6. We need to change the hardcoded information to props.


## lecture 29. Component Nesting.

1. Our components does not have any bound. index.js -> App COmponent CommentDetail.js -> Comment Detail Component.

2. To make CommentDetail component available for others components, we should add the line 'export default CommentDetail' on CommentDetail.js

3. Some others components that want to use, need to put the line 'import CommentDetail from './CommentDetail'';

4. So, lets add to index.js the import CommentDetail.

5. The library that takes the responsabilities from import/exports is called webpack.

6. Inside the App JSX we use the name of the referenced component as HTML. 

```jsx
<div className="ui container comments">
    <CommentDetail/>
</div>
```

## lecture 30. React's Props System

Its always a good practice make Component Hierarchy Diagram.

> Props in react is: A System for passing data from a parent component to a child component.
>> Goal is to customize or configure a child component.

Example:

>>App -> prop: Name='Alex' -> CommentDetail

>>App -> prop: Name='Sam' -> CommentDetail

>>App -> prop: Name='Peter' -> CommentDetail


## lecture 31. Passing and Receiving Props

The props system have two phases, first we need to provide information, the second we need to receive this information on child and handle with it.

### Providing
Its simple, just use HTML sintax:

```jsx
<CommentDetail author="Alex" />
<CommentDetail author="Sam" />
<CommentDetail author="Peter" />
```
or variables interpolation

```jsx
<CommentDetail author="{author}" />
```

### Receiving

In the arrow function of the component use an argument called props.

```jsx
const CommentDetail = (props) => {
    console.log(props);

    <a href="/" className="author">
        {props.author}
    </a>
}
```

## lecture 32. Passing Multiples Props

We see before how to pass props. Its just need to write the property name equals property value ex(author="Peter").

Let's pass the other props, timeAgo and text.

```jsx
<CommentDetail author="Alex" timeAgo="Today at 4:45PM" text="Nice blog post!" avatar={Faker.image.avatar()} />

  return (
        <div className="comment">

        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
        </a>

        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">
                    {props.timeAgo}
                </span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>

        </div>
    );
```

## lecture 33. Passing Props - Solutions

Coded solution.

## lecture 34. Component Reuse

Lets add two buttons to our comment component for the features: (Approve) (Reject).

Lets create another component called ApprovalCard to keep those buttons. This new component show a text and offer two options: approve or reject.

## lecture 35. Implementing an Approval Card.

1. Create ApprovalCard.js file.
2. Create a react component with card html from semantic-ui.com
3. Add export to ApprovalCard component.
4. Add import of ApprovalCard in index.js.
5. Use ApprovalCard component bysides CommentDetail component.


## lecture 36. Showing custom children.

We need to show the approvalCard inside CommentDetail, but we need to keeps the reusability of the components.

When we passing a entire component inside another, its add to props always as children, its a little funky.

```jsx
 <ApprovalCard>
    <CommentDetail
        author="Alex"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
        avatar={Faker.image.avatar()}
    />
</ApprovalCard>

<div className="content">{props.children}</div>
```

## lecture 37. Component Reuse.

This funky way allow us to reuse the approvalCard just wrapping anything, html or plainText for approves.

Just make sure we are using props.children somewhere in the parent.


## lecture 38. Exercise - Props and reusable.

Just pass props as attrs.

## lecture 39. Coding Exercise 2: Test Your Knowledge: Props.

Exercise solution:

```jsx
<script type="text/babel" data-presets="env,react">
    const App = () => {
        return (
            <div>
                <Message message="Reusable component" details="Details of the message"/>
            </div>
        );
    }
    
    const Message = (props) => {
        return (
            <div className="ui message">
                <div className="header">{props.message}</div>
                <p>{props.details}</p>
            </div>
        );
    }
    

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>
```

## lecture 40. Exercise - Children.

Extract content duplicated into another component.

```jsx
<div className="ui placeholder segment">... </div>
```

## lecture 41. Children Exercise Solution.

```jsx
 const Segment = (props) => {
        
        return (
            <div className="ui placeholder segment">
                {props.children}
            </div>
        );
    }

    const App = () => {
        return (
            <div>
                
              <Segment>
                  <div className="ui icon header">
                        <i className="pdf file outline icon"></i>
                        No documents are listed for this customer.
                    </div>
                    <div className="ui primary button">Add Document</div>
               </Segment>
               
                <Segment>
                    <h4 class="ui header">For Your Information</h4>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                 </Segment>
            </div>
        );
    } 
```

# 25/nov/18 - Structuring Apps with Class-Based Components

## lecture 42. Class-Based Components.

> The lecture 10 says: React component is a function or a class, that produces HTML to show the user.

Until now we are just using function components, on this lecture we going to start with class based components.

### Function Components

> Good for simple content.

### Class Components

> Good for just about everything else.

### Class Components Benefits

1. Easier code organization.
2. Can use 'state' (another react feature).
    1. Easier to handle user input.
3. Understands lifecycle events.
    1. Easir to do things when the app first starts.


## lecture 43. Application Overview.

Lets build seasons application, that detected user location and timezone afterwards changes your style.

1. Burr, its chilly, if the user attempts:

* in the northen hemisphere.
    * and between October and March.
* in the southern hemisphere.
    * and between March and October.

2. Let's hit the beach, if the user attempts:

* in the northen hemisphere.
    * and between March and October.
* in the southern hemisphere.
    * and between October and March.

### App Challenges.

1. Get user physical location.
2. Determine the current month.
3. Change text and styling based on location + month.


## lecture 44. Scaffolding the App.

1. Go to semantic-ui.com, add css to the index.html.
2. Erase all files in src folder.
3. Create index.js in src folder.
4. Import React and ReactDOM.
5. Write the App component returning div.
6. Create SeasonDisplay.js file.
7. Write the SeasonDisplay returning a simple div with 'Season' text.
8. Use export default SeasonDisplay.
9. In index.js import SeasonDisplay.
10. Use SeasonDisplay in App component.



## lecture 45. Getting a Users Physical Location.

We can use mozilla api:

>https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation/getCurrentPosition

1. In app component use the mozilla api.

> window.navigator.geolocation.getCurrentPosition();


## lecture 46. Resetting Geolocation Preferences.

If the getCurrentPosition() fails, we must reset the geo preferences.

Just click block prompt to emulate the error.

## lecture 47. Handling Async Operations with Functional Components.

We cant keep state on functional component because its runs once and not keeps state. So, in this case, we are rendering the content but we got the geolocation answer afterwards.

> Answer: Refactoring to Class Component. Functional Component does not supports async handle.

## lecture 48. Refactoring from Functional to Class Components.

To refactor a functional comp to class comp, we need to attemp some requirements.

### Rules of Class Components.

1. Must be a Javascript Class.
2. Must extend subclass React.Component.
3. Must define a 'render' method that returns some amount of JSX.

for example: 

```jsx
class App extends React.Component {

    render(){

        window.navigator.geolocation.getCurrentPosition(

            (position) => console.log(position),
            (error) => console.log(error)
    
        );

        return (
            <div>        
                <div>Latitude:</div>  
                <div>Longitude:</div>  
                <SeasonDisplay/>
            </div>

        );
    }

}
```

# 26/nov/18 Section 5 - State in React Components.

## lecture 49. The Rules of State.

1. Only usable with class components.
2. You will confuse props with state :(.
3. 'State' is a JS object that contains data relevant to a component.
4. Updating 'state' on a component causes the component to (almost) instantly rerender.
5. State must be initialized when a component is created.
6. **State can only be updated using the function 'setState'.**

> Technically can be used with funcional components using the 'hooks' system.


## lecture 50. Initializing State Through Constructors.

> React says we have to define render method!!

> We need to specificy constructor function in class component.
>> In the constructor is a good place to initialize the state.



## lecture 51. Updating State Properties.

> Updating state object on a component causes a instantly rerender.
>>Never assign directly on state.

```jsx
constructor(props) {
		super(props);

		// init state
		this.state = { lat: 40 };

		// putting getCurrentPosition here, avoid multiples fetchs on comp render.
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we called setState!!
				this.setState({
					lat: position.coords.latitude
                });
                
                // we dit not!! this is bad!!
                // this.state.lat = position.coords.latitude;
			},
			(error) => console.log(error)
		);
    }
```

## lecture 52. App Lifecycle Walkthrough.

> Details of lecture 51 behavior.

## lecture 53. Handling Errors Gracefully

How to handling errors, in almost all new react players forget to handle errors. If anything gonna wrong, we cant stop to render the component and say to user there are a problem.

Just save the error message in state. :)



## lecture 54. Conditionally Rendering Content.

1. Render latitude if successed.
2. Render error if something gonna wrong.
3. Render loading if geolocation do not answer yet.


# 26/nov/18 Section 6 - Understanding Lifecycle Methods.


## lecture 55. Introducing Lifecycle Methods.

Component Lifecycle over time:

1. constructor.
2. render. {content visible on screen}
3. componentDidMount. {sit and wait for updates...}.
4. componentDidUpdate. { sit and wait until this component is not longer shown}.
5. componentWillUnmount.

> if we code a function called componentDidMount, it is called once one time after component render.

> if we code a function called componentDidUpdate, it is called everytime afterwards the component updates by a setState.

> if we code a function called componentWillUnmount, it is called everytime when the component is no longer visible.

## lecture 56. Why Lifecycle Methods.

> Why we will use lifecycle methods?

1. constructor. {its a good place to do one-time setup}
2. render. {avoid doing anything besides returning JSX}
3. componentDidMount. {Good place to do data-loading!}
4. componentDidUpdate. {Good place to do more data loading when state/props change}
5. componetWillUnmount.{Good place to do cleanup(specially for non-React stuff)}

> Others lifecycle methods (rarely used)

1. shouldComponentUpdate.
2. getDerivedStateFromProps.
3. getSnapshotBeforeUpdate.


## lecture 57. Refactoring Data Loading to Lifecycle Methods.

Lets refactor our geolocation method to lifecycles.

> Load some funky stuff on the right time:

```jsx
	componentDidMount() {
		console.log("My season component just rendered.");

		// putting getCurrentPosition here, avoid multiples fetchs on comp render.
		window.navigator.geolocation.getCurrentPosition(
			position =>
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				}),
			err =>
				this.setState({
					errorMessage: err.message
				})
		);
    }
```

## lecture 58. Alternate State Initialization.

Lets use a different way to init state.

Go to babeljs.io and use this snippet:

```jsx
class App extends React.Component {
	// equivalent to constructor function thank the babeljs
	state = {
		reactName: "react-component-app",
		lat: null,
		long: null,
		errorMessage: ""
	};
```
We can see that thank the babeljs we can use this way to create our construtor.

## lecture 59. Passing State as Props.

How to send state values as props to another components.


## lecture 60. Determining Season.

Lets discover what season user are, by the latitude and month.

```jsx
getSeason(lat, month) {
		console.log(lat + " " + month);
		if (month > 2 && month < 9) {
			return lat > 0 ? "summer" : "winter";
		} else {
			return lat > 0 ? "winter" : "summer";
		}
	}
```

## lecture 61. Ternary Expressions in JSX.

If is winter we need to display 'Chuur'!

If is summer we need to display 'Lets hit the beach!';



## lecture 62. Showing Icons.

> semantic-ui.com, find icons.

```jsx
    <i className={`${this.state.seasonIcon} icon`} />
```

## lecture 63. Extracting OPtions to Config Objects.

Lets refactor this things to eliminated that duplicated ternaries. Using a pattern, config object!

```jsx
// Pattern to avoid ternaries
	seasonConfig = {
		summer: {
			name: "summer",
			text: "Let's hit the Beach!",
			iconName: "sun"
		},
		winter: {
			name: "winter",
			text: "Burr, its chilly",
			iconName: "snowflake"
		}
	};
```
## lecture 64. Adding Some Styling.

> semantic-ui.com, find icons and find some css.

We can create a .css with the name of js, to refer the styling of my component. React does not scan your src folder to load css files, this need to made manualy with import;

```jsx
import 'SeasonDisplay.css'
```
This works because webpack takes care about the css file.

## lecture 65. Showing a Loading Spinner.

Lets think about user experience. Go for a loading component.

> Look for a loading in semantic-ui.com and create loader component.


## lecture 66. Specifying Default Props.

Lets make default props to Loader component.

To create default values just use like this (two ways):

1. Or expression: {props.message || 'Loading...'}
2. Or using the fancy way defaultProps;

```jsx 
    Component.defaultProps ={
        message : 'Loading...'
    }
```

### Example:

```jsx
import React from "react";

const Spinner = props => {
	return (
		<div className="ui active dimmer indeterminate">
			<div className="ui big text loader">{props.message}</div>
		</div>
	);
};

Spinner.defaultProps = {
	message: "Loading..."
};

export default Spinner;
```

## lecture 67. Avoiding Conditionals in Render.

Lets add a red border to loading component without repeat those lines, lets use a helper function.

Use a helper function to render some JSX conditionaly.

```jsx

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return (
				<div data-react-name={this.state.reactName}>
					<div>Error: {this.state.errorMessage} </div>
				</div>
			);
		} else if (!this.state.errorMessage && this.state.lat) {
			return (
				<div data-react-name={this.state.reactName}>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}

		return <Spinner />;
	}

	// React says we have to define render method!!
	render() {
		return (
			<div data-react-name={this.state.reactName}>{this.renderContent()}</div>
		);
	}
```

## lecture 68. Breather and Review.

Just do a review of all code wrote until now.

>https://github.com/GiuseppeMP/udemy-modern-react-with-redux


## lecture 69. Exercise class-based-component.

Solution:

```jsx
 class UserForm extends React.Component {
    render(){
        return (
        <form>
            <label>Enter a username:</label>
            <input />
        </form>
        );
    };

}
```

## lecture 70. Updating Components with State.


Solution:

```jsx
class Clock extends React.Component {
    state = {
        time : null
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time : new Date().toLocaleTimeString()    
            });
            
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}
```


# 26/nov/18 Section 7 - Handling User Input with Forms and Events.


## lecture 71. App Overview.


Search for images from text input text.

> Tech Challenges 

1. How do we get feedback from the user
2. How do we fetch data from some outside API or server?
3. How do we show lists of records?

* Create a project pics.
* Use create-react-app pics.

## lecture 72. Component Design.


> App Challegends

1. Need to get a search term from the user.

2. Need to use that search term to make a request to an outside API and fetch data.

3. Need to take the fetched images and show them on the screen in a list. 

4. Lets create two components, SearchBar and ImageList.

4.1. App -> SearchBar, App -> ImageList.


## lecture 73. Adding Some Project Structure.

1. Delete all generated files in src folder.

2. Create a index.js file.

3. Create a folder components and inside of it, create a file App.js.

4. Write the App.js as a functional component and import on index.js.


## lecture 74. Showing Form to the User.


1. Lets create a SearchBar.js in components.

2. Add a input text and import on App.js



## lecture 75. Adding a Touch of style.

> Go to semantic-ui.com

1. Lets install semantic ui using cdn to be much easier for us. https://cdnjs.com/libraries/semantic-ui

2. Find for semantic-ui.css.min

3. Inside folder public, find for index.html and add the css https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css;

```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
```


## lecture 76. Creating Events Handlers.

Lets handle some user input.

1. Using onchange. Never uses () on onChange attr, this causes the function be called on render phase.

### List of events JSX:

* onClick -> User click on element.
* onChange -> User change the element value.
* onSubmit -> User submit the form.

## lecture 77. Alternate Event Handler Syntax.

> There is a alternative to use onChange event.

```jsx
    {e =>
        this.setState({
            searchTerm: e.target.value
        })
    }
```

## lecture 78. Uncontrolled vs Controlled Elements.

### Uncontrolled vs Controlled Elements.

Uncontrolled -> There are not state variable bounded on input.

Controlled -> There are a state variable bounded on input.

```jsx

 state = {
    searchTerm: null
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              value={this.state.searchTerm}
              onChange={e =>
                this.setState({
                  term: e.target.value
                })
              }
            />
          </div>
        </form>
      </div>
    );
  }
```

## lecture 79. More on Controlled Elements.

Controlled can change the values by logical functions like filters and capitalize.

Uncontrolled cant change the inputed value by the user.


## lecture 80. Handling Form Submittal.

Lets make the Enter submit the form but we dont want to refresh all page.

1. Add to form the event 'onSubmit';
2. Create a method called onFormSubmit.
3. Add onSubmit={this.onFormSubmit};

```jsx
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.term);
  }
```

## lecture 81. Understanding 'this' in javascript.

Why on onFormSubmit this.state.term is undefined.

Instance of SearchBar
    state
    render
    onFormSubmit
    this -> giver access of SearchBar.

    > What is 'this' used for in a class?
    > How is the value of 'this' determined in a function.


## lecture 82. Solving Context Issues.

We can resolve this using many different ways:

1. constructor bind:
```jsx
    this.drive = this.drive.bind(this);
```
2. Using arrow function. Arrow function always bind 'this' automaticly. [BEST]
```jsx
 onFormSubmit =(e) => {
    e.preventDefault();
    console.log(this.state.term);
  }
```

3. We can pass directly an arrow function on onSubmit attribute:

 ```jsx
 <form className="ui form" onSubmit={ (e) =>this.onFormSubmit()}>

onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.term);
  }
```

## lecture 83. Communicating Chiled To Parent

Is not the job of the SearchBar component to make the query. The right way is this component pick up the term and pass to another component.

How to pass comunicate between components using props. How to pass parent prop down to child component.

1. In App component create a callback called this.onSearchSubmit, and this is passed to child.

2. In child afterwards received the term and the callback function is called if somethings happes.

3. Lets refactor!

## lecture 84. Invoking Callbacks in Children.

1. Refactor App to class-based component.
2. Pass a callback:

```jsx
onSearchSubmit(term) {
    console.log(term);
  }
  <SearchBar onSubmit={this.onSearchSubmit} />
```

3. Refer on SearchBar the name onSubmit.
