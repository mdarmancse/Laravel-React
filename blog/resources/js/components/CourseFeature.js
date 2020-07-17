import React, {Component, Fragment} from 'react';
import Menu from "./menu";
import HomeBanner from "./HomeBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class CourseFeature extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={12}>

                            <Card className="text-center mt-5 mb-5" >
                                <Card.Img className="item-logo" src="storage/play.svg" />
                                <Card.Body>
                                    <Card.Title className="title-text mt-2">REACT BASIC</Card.Title>
                                    <Card.Text className="des-text">
                                        Free Videos Cover All Of Basics About React
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default CourseFeature;
