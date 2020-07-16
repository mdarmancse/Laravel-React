import React, {Component, Fragment} from 'react';
import { Router, Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import CoursePlan from "../pages/CoursePlan";
import FreeClass from "../pages/FreeClass";
import Registration from "../pages/Registration";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={'/courseplan'} component={CoursePlan}/>
                    <Route exact path={'/freeclass'} component={FreeClass}/>
                    <Route exact path={'/registration'} component={Registration}/>


                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
