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

```json
import React from 'react';
import ReactDOM from 'react-dom';
```

> import 'alias' from 'library/foldername' > CommonJS Modules
> require('library/foldername') > ES2015 Modules

1. import -> We want to get code from some other file or dependency.
2. 'React' -> The variable we want to assign this import to.
3. 'from' -> We are about to specify the name of the library or file we are importing from.
4. 'react'-> The name of the dependency or path of the file we want, we are importing.
