import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetail
                author="Alex"
                timeAgo="Today at 4:45PM"
                content="Nice blog post!"
                avatar={Faker.image.avatar()}
            />
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 2:00AM" 
                content="Loved it!" 
                avatar={Faker.image.avatar()} 
            />
            <CommentDetail 
                author="Peter" 
                timeAgo="Yesterday at 5:00PM" 
                content="Awesome!" 
                avatar={Faker.image.avatar()} 
            />
        </div>
    );
};

ReactDOM.render(
    <App />, document.querySelector("#root")
);