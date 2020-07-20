import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faLocationArrow, faMapMarked, faPhone} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='jumbotron  jumbotron-fluid bg-light-Off mb-0'>
                    <Container className='container'>
                        <Row>
                            <Col md={3} lg={3} sm={6}>

                                <h3 className="title-text">Follow Me</h3>
                                <hr/>
                                    <p><a target="_blank" href="https://web.facebook.com/mdarmancse"
                                          className="footer-link"><FontAwesomeIcon icon={faFacebook}/> Facebook</a></p>
                                    <p><a target="_blank" href="https://www.youtube.com/" className="footer-link"><FontAwesomeIcon icon={faYoutube}/> YouTube</a></p>
                            </Col>

                            <Col md={3} lg={3} sm={6}>

                                <h3 className="title-text">Address</h3>
                                <hr/>
                                    <p className="des-text"> <FontAwesomeIcon icon={faMapMarkedAlt}/> Hathazari,Chattogram</p>
                                    <p className="des-text"> <FontAwesomeIcon icon={faPhone}/> 01787281564 (Help-Line)</p>
                                    <p className="des-text"> <FontAwesomeIcon icon={faEnvelope}/> amd55077@gmail.com</p>

                            </Col>
                            <Col md={3} lg={3} sm={6}>

                                <h3 className="title-text">Information</h3>
                                <hr/>
                                    <a className="footer-link" target="_blank" href="http://rabbil.com/">About
                                        Arman </a><br/>
                            </Col>

                            <Col md={3} lg={3} sm={6}>
                                <h3 className="title-text">Legal</h3>
                                <hr/>
                                    <a className="footer-link" target="_blank" href="refund.html">Refund Policy</a><br/>
                                    <a className="footer-link" target="_blank" href="term.html">Terms &
                                        Conditions</a><br/>

                            </Col>


                        </Row>

                    </Container>

                </Container>
                <Container fluid={true} className='container-fluid text-white m-0 text-center p-3 custom-bg'>

                    <p className="credit-text my-2 ">All Rights Reserved By Md Arman © 2020-2021</p>

                </Container>


            </Fragment>
        );
    }
}

export default Footer;
