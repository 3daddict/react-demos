import React from 'react';
import '../assets/css/app.css';
import DemoForm from './demo_form';

const user = {
    email: 'some_email@test.com',
    name: 'Some Name',
    password: 'asdf'
}

const App = () => (
    <div>
        <div className="app">
            <DemoForm email={user.email} />
        </div>
    </div>
);

export default App;
