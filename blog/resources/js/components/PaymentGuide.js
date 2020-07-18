import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Axios from "axios";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Loader from "./Loader";
import WentWrong from "./WentWrong";

class PaymentGuide extends Component {

    constructor(){
        super();

        this.state={

            DataList:[],
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        Axios.get('/getPaymentData')
            .then((response) => {

                if (response.status == 200) {

                    this.setState({DataList:response.data, isLoading:false})

                } else {

                    this.setState({isLoading:false, isError:true})
                }
            })
            .catch((error) => {
                this.setState({isLoading:false, isError:true})

            })

    }
    render() {
        if (this.state.isLoading==true){

            return(

                <Loader/>
            )
        }
        else if (this.state.isError==true){

            return (
                <WentWrong/>
            )
        }else{


            const myData=this.state.DataList;

            return (
                <Fragment>
                    <Container fluid={true} className="container section-marginbg">
                        <Row className="row justify-content-center text-center">
                            <Col md={6} sm={12} className="p-4">
                                <img className='bkash-logo' src='storage/BKASH-LOGO.png'/> <br/>
                                <p className='texr-justify des-text'>{ReactHtmlParser(myData[0]['des'])}</p>
                                <Row>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className='text-center'>
                                            <Card.Body>
                                                <h4 className=''>0000</h4>
                                                <p className='des-text m-0'>Total Class</p>

                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className='text-center'>
                                            <Card.Body>
                                                <h4 className=''>0000</h4>
                                                <p className='des-text m-0'>Total Class</p>

                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className='text-center'>
                                            <Card.Body>
                                                <h4 className=''>{myData[0]['price']}</h4>
                                                <p className='des-text m-0'>Enroll Fee</p>

                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>

                            </Col>

                            <Col md={6} sm={12} className="p-4 text-center">

                                <Card className='text-center h-100'>
                                    <img className='card-img-top' src={myData[0]['banner']} alt="Card image cap"/>
                                    <Card.Body>
                                        <NavLink className='btn mt-2 btn-outline' to='/registration'>Enroll Now</NavLink>

                                    </Card.Body>


                                </Card>

                            </Col>

                        </Row>

                    </Container>

                </Fragment>
            );
        }

    }
}

export default PaymentGuide;
