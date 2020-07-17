import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import wrong from "../../images/oops.png"
import Col from "react-bootstrap/Col";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img className='w-50' src={wrong}/>

                        </Col>

                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default WentWrong;
