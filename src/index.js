import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/app';

const USER = {
    name: "Michael Salvati",
    luckyNumber: LuckyNumber(),
    }

function LuckyNumber() {
    let luckyNumber = 0;
    luckyNumber = Math.floor((Math.random() * 1000) + 1);
    return luckyNumber;
}

function Greeting(props) {
    return (
        <div className="container">
            <h1>{props.name}</h1>
            <h2 className="text-muted">This is your lucky number: {props.luckyNumber}</h2>
        </div>
    );
}

const user = {
    firstName: 'Mike',
    lastName: 'Salvati'
};

function fullName(user){
    return `${user.firstName} ${user.lastName}`;
}

const greeting = <h1>Hello {fullName(user)}</h1>;

ReactDOM.render(
    // <App />,
    Greeting(USER),
    document.getElementById('root')
);
