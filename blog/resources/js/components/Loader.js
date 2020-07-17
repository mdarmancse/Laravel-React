import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import loader from "../../images/loading.svg";
import Col from "react-bootstrap/Col";

class Loader extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img className='react-logo' src={loader}/>

                        </Col>

                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default Loader;
