import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CoursePlanHome extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="jumbotron bg-light section-margin jumbotron-fluid">
                    <Row className="row justify-content-center text-center">
                        <Col className="col-md-8">

                            <a><img className='play-logo' src='storage/play.svg'/></a>
                            <h5 className='title-text mt-2'>React JS Course Plan</h5>
                            <p className='des-text'>The overall skills gained from tthis project based courses will prepare you for any type of project development. In this course you will be taught how to write a complete project with React JS including User Panel + Admin Panel. Source code will also be provided with each class of the course, so you can easily practice manually. This project uses React JS with PHP for the server site and MySQL for the database.</p>


                        </Col>

                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default CoursePlanHome;
