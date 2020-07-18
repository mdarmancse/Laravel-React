import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/style.css';
import Button from "react-bootstrap/Button";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className='parallax' fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p className="mt-lg-5 top-title">React JS</p>
                            <p  className="m-0 top-subtitle">Learn with Md Arman Ullah</p>
                            <p className="m-0 top-subtitle">Learn Something Good & Do Something Better</p>
                            <Button className="login-btn m-3">Login</Button>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default HomeBanner;
