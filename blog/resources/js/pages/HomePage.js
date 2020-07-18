import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/HomeBanner";
import Axios from "axios";
import CourseFeature from "../components/CourseFeature";
import Loader from "../components/Loader";
import WentWrong from "../components/WentWrong";
import CoursePlan from "./CoursePlan";
import CoursePlanHome from "../components/CoursePlanHome";
import PaymentGuide from "../components/PaymentGuide";

class HomePage extends Component {



    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
                <CoursePlanHome/>
                <PaymentGuide/>


            </Fragment>
        );
    }
}

export default HomePage;
