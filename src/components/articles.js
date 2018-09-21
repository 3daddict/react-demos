import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Lexus from './articles/lexus';
import Nissan from './articles/nissan';
import Acura from './articles/acura';

export default () => {
    return(
        <Router>
        <div>
            <h1>Articles</h1>
            <p>Here are some articles</p>
            <ul>
                <li>
                    <Link to="./articles/lexus">Lexus</Link>
                </li>
                <li>
                    <Link to="./articles/nissan">Nissan</Link>
                </li>
                <li>
                 <Link to="./articles/acura">Acura</Link>
                </li>
            </ul>
        </div>
            <Route path="./articles/lexus" component={Lexus} />
            <Route path="./articles/nissan" component={Nissan} />
            <Route path="./articles/acura" component={Acura} />
        </Router>
        
    );
}
    