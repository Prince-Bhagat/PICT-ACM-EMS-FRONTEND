import React from 'react';
import { withRouter,Switch, Route } from 'react-router-dom';
import NavBar from  './Common/NavBar/NavBar';
import Home from './Home/Home.js';

function App(props)
{
    return(
        <div>
            <NavBar></NavBar>
            
            
        </div>
    );
}

export default withRouter(App);