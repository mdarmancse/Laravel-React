import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/HomeBanner";
import Axios from "axios";
import CourseFeature from "../components/CourseFeature";
import Loader from "../components/Loader";
import WentWrong from "../components/WentWrong";

class HomePage extends Component {



    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
                <Loader/>
                <WentWrong/>

            </Fragment>
        );
    }
}

export default HomePage;
