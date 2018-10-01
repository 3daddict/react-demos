import React from 'react';
import { Link, Route } from 'react-router-dom';

import Lexus from './articles/lexus';
import Nissan from './articles/nissan';
import Acura from './articles/acura';

export default props => {
console.log('Articles props: ', props);

const {path} = props.match;

console.log('Path: ', path);

    return(
        <div className="container">
            <h1>Articles</h1>
            <p>Here are some articles</p>
            <ul>
                <li>
                    <Link to={`${path}/lexus`}>Lexus</Link>
                </li>
                <li>
                    <Link to={`${path}/nissan`}>Nissan</Link>
                </li>
                <li>
                 <Link to={`${path}/acura`}>Acura</Link>
                </li>
            </ul>
        
            <Route path={`${path}/lexus`} component={Lexus} />
            <Route path={`${path}/nissan`} component={Nissan} />
            <Route path={`${path}/acura`} component={Acura} />
            </div>
        
    );
}
    