import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {

    return (
        <div className="ui container comments">
          
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure about that?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post!"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 2:00AM" 
                    content="Loved it!" 
                    avatar={Faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Peter" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="Awesome!" 
                    avatar={Faker.image.avatar()} 
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />, document.querySelector("#root")
);