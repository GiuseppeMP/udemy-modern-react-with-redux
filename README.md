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

## 1,2,3,4. - What is React

1. Library focused on user interaction.
2. React is a library and React-DOM is another.
3. Based on components.
4. Uses npm, for example:  "npm install -g create-react-app".


## 5, 6. Generating a react project

> npm (Runs npm) , install (Command to NPM), -g (Install this package globally, so we can run from anywhere, terminal etc), create-react-app (name of the package we want).

> create project with "create-react-app project-name" or "npx create-react-app project-name".

> Babel, (Javascript updates does not follow browsers supports), babel takes any javascript and convert to javascript ES5, like ES2018 -> ES5. Babel have a huge number of packages, this is the reason of many dependencies in a generated project.

## 7. Exploring a create-react-app project

> src : Folder where we put all the source code we write.

> public :  Folder that stores static files, like images.

> node_modules : Folder that contains all of our project dependencies.

> package.json : Records our project dependencies and configures our project.

> package-lock.json :  Records the exact version of packages that we install.

> README.md : Instructions on how to use this project.


## 8. Starting and Stopping a React App

> stopping the react app -> CTRL+C on terminal that is running the react app.

> starting the react app -> runs npm start on our project directory.


## 9. Javascript Module Systems

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

## 10. Displaying content with functional components.

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


## 11. What is JSX.

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

## 12. Converting HTML to JSX.

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


## 13. Inline Styling with JSX.

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


## 14. Converting Styling to JSX Format

Steps.

1. Change " " to {{ }}.
2. Look for properties with babe-case and convert to camelCase.
3. Change separator ; properties for , .
4. Make sure the values of properties are wrapped by simple quote, '' or double quotes " " .
5. Ex: before: style="background-color:blue; color:white" after: style={{backgroundColor:'blue', color:'white'}} .


## 15. class vs className

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

## 16. Referencing JS Variables in JSX.

We can reffer js variables or functions in JSX using {} (brackets).

```jsx
const buttonText = 'Click Me!';

function getBtnText(){
    return "Click on Me!";
}


<button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>

<button style={{backgroundColor:'blue', color:'white'}}>{getBtnText()}</button>


``` 

## 17. Values JSX Can't Show


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
