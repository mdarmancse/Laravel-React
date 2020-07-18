import React, {Component, Fragment} from 'react';
import Menu from "./menu";
import HomeBanner from "./HomeBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Loader from "./Loader";
import WentWrong from "./WentWrong";
import {map} from "react-bootstrap/esm/ElementChildren";

class CourseFeature extends Component {

    constructor(){
        super();

        this.state={

            DataList:[],
            isLoading:true,
            isError:false
        }
    }

  componentDidMount() {
      Axios.get('/getCourseData')
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

                        <Card className="text-center mt-5 mb-5" >
                            <Card.Img className="item-logo" src={myList.img} />
                            <Card.Body>
                                <Card.Title className="title-text mt-2">{myList.title}</Card.Title>
                                <Card.Text className="des-text">
                                    {myList.des}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                )

            });

            return (
                <Fragment>
                    <Container className='section-margin'>
                        <Row>
                            {myView}

                        </Row>

                    </Container>

                </Fragment>
            );
        }


    }
}

export default CourseFeature;
