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

# 25/nov/18 - Building Content with JSX!

## lecture 11. What is JSX.

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

## lecture 12. Converting HTML to JSX.

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


## lecture 13. Inline Styling with JSX.

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


## lecture 14. Converting Styling to JSX Format

Steps.

1. Change " " to {{ }}.
2. Look for properties with babe-case and convert to camelCase.
3. Change separator ; properties for , .
4. Make sure the values of properties are wrapped by simple quote, '' or double quotes " " .
5. Ex: before: style="background-color:blue; color:white" after: style={{backgroundColor:'blue', color:'white'}} .


## lecture 15. class vs className

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

## lecture 16. Referencing JS Variables in JSX.

We can reffer js variables or functions in JSX using {} (brackets).

```jsx
const buttonText = 'Click Me!';

function getBtnText(){
    return "Click on Me!";
}


<button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>

<button style={{backgroundColor:'blue', color:'white'}}>{getBtnText()}</button>


``` 

## lecture 17. Values JSX Can't Show.


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

## lecture 18. Finding Forbidden Property Names.

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

## lectures 19, 20. Exercise Introduction, Coding Exercise 1: JSX Interpolation.

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


## lecture 21. Three Tenets of Components.

In react there are three tenets we must know, we create a component at time, but a typical react app is a set of component inside each other.

> Component Nesting - A component can be shown inside of another.

> Component Resuability - We want to make components that can be easily reused through out application.

> Component Configuration - We should be able to configure a component when it is created.

## lecture 22. Application Overview.

Lets generated another project by sides 'jsx' project. lets use create-react-app components.

We going to build a comments component.

## lecture 23. Getting Some Free Styling.

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

## lecture 24. Naive Component Approach.

Create comment html block code.


## lecture 25. Specifying images in JSX.

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

## lecture 26. Duplicating a Single Component.

We need to duplicate all JSX to each comment, this is painful, the file becomes larges and we dont know what hack we are looking at.

Next lecture we going to refactor this.

## lecture 27. Extracting JSX to New Components.

Creating a Reusable & Configurable Component.

1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? Think of a descriptive name for what i does.
3. Create a new file to house this new component - it should have the same name as the component.
4. Create a new component in the new file, paste the JSX into it.
5. Make the new component configurable by using React's 'props' system.
6. We need to change the hardcoded information to props.


## lecture 28. Component Nesting.

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

## lecture 29. React's Props System

Its always a good practice make Component Hierarchy Diagram.

> Props in react is: A System for passing data from a parent component to a child component.
>> Goal is to customize or configure a child component.

Example:

>>App -> prop: Name='Alex' -> CommentDetail

>>App -> prop: Name='Sam' -> CommentDetail

>>App -> prop: Name='Peter' -> CommentDetail


## lecture 30. Passing and Receiving Props

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

## lecture 31. Passing Multiples Props

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

## lecture 32. Passing Props - Solutions

Coded solution.

## lecture 33. Component Reuse

Lets add two buttons to our comment component for the features: (Approve) (Reject).

Lets create another component called ApprovalCard to keep those buttons. This new component show a text and offer two options: approve or reject.

## lecture 34. Implementing an Approval Card.

1. Create ApprovalCard.js file.
2. Create a react component with card html from semantic-ui.com
3. Add export to ApprovalCard component.
4. Add import of ApprovalCard in index.js.
5. Use ApprovalCard component bysides CommentDetail component.


## lecture 35. Showing custom children.

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

## lecture 36. Component Reuse.

This funky way allow us to reuse the approvalCard just wrapping anything, html or plainText for approves.

Just make sure we are using props.children somewhere in the parent.


## lecture 37. Exercise - Props and reusable.

Just pass props as attrs.

## lecture 38. Coding Exercise 2: Test Your Knowledge: Props.

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

## lecture 39. Exercise - Children.

Extract content duplicated into another component.

```jsx
<div className="ui placeholder segment">... </div>
```

## lecture 40. Children Exercise Solution.

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

## lecture 41. Class-Based Components.

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


## lecture 42. Application Overview.

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


## lecture 43. Scaffolding the App.

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



## lecture 44. Getting a Users Physical Location.

We can use mozilla api:

>https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation/getCurrentPosition

1. In app component use the mozilla api.

> window.navigator.geolocation.getCurrentPosition();