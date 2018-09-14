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

ReactDOM.render(
    // <App />,
    Greeting(USER),
    document.getElementById('root')
);
