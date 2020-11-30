import React from 'react'
import { Link, Switch, Route, withRouter} from 'react-router-dom';
import ManageEvent from './../Event/ManageEvent';


function Home(props)
{
    return (
        <Switch>
            <Route exact path= "/">
                Home Page
            </Route>
            <Route path = "/event">
                <ManageEvent></ManageEvent>
            </Route>
            
        </Switch>
        
    );
}
export default withRouter(Home);