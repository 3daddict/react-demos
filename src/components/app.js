import React from 'react';
import '../assets/css/app.css';
import '../assets/css/app_styles.css';
import logo from '../assets/images/logo.svg';
import skate from '../assets/images/skate.jpg';

const greenStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '58px',
    color: 'green'
}

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <div className="comp1">
            <p className="c1">Functional Component 1</p>
            </div>
            <div className="comp2">
            <p className="c2">Functional Component 2</p>
            </div>
            <div>
            <p style={greenStyle}>Functional Component 3</p>
            <img src={skate} alt="skater"/>
            </div>
        </div>
    </div>
);

export default App;
