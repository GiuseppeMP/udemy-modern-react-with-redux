import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetail author="Alex" timeAgo="Today at 4:45PM" text="Nice blog post!" avatar={Faker.image.avatar()} />
            <CommentDetail author="Sam" timeAgo="Today at 2:00AM" text="Loved it!" avatar={Faker.image.avatar()}/>
            <CommentDetail author="Peter" timeAgo="Yesterday at 5:00PM" text="Awesome!" avatar={Faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector("#root")
);