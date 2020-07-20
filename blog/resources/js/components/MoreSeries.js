import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import Loader from "./Loader";
import WentWrong from "./WentWrong";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class MoreSeries extends Component {
    constructor(){
        super();

        this.state={

            DataList:[],
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        Axios.get('/getMoreSeriesData')
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
        }
        else{
            const myList=this.state.DataList;
            const myView=myList.map(myList=>{
                return(
                    <Col lg={3} md={3} sm={12}>


                        <Card href={myList.url} className="text-center mt-5 mb-5" >
                            <Card.Img className="item-logo" src={myList.img} />
                            <Card.Body>
                                <Card.Title className="title-text mt-2">{myList.title}</Card.Title>
                                <Card.Text className="des-text">
                                    {myList.des}
                                </Card.Text>
                                <a target='_blank' className='nav-item my-1 des-text' href={myList.url}>View More</a>
                            </Card.Body>
                        </Card>

                    </Col>

                )

            });

            return (
                <Fragment>
                    <Container className='text-center section-margin'>
                        <h5 className='title-text mt-2'>Find More</h5>
                        <p className='des-text'>Learn with Arman,and get other tutorial series by Arman</p>

                        <Row>

                            {myView}

                        </Row>

                    </Container>

                </Fragment>
            );
        }


    }
}

export default MoreSeries;
