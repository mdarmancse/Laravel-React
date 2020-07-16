import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div>
                    <p>Home Page</p>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
