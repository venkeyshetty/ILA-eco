import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})

    const onChange = (e) => {

        console.log(e.target.value);

        setBookingInfo({ "selectedQuantity": e.target.value, "finalPrice": e.target.value * props.location.projectData.productPrice })
    }

    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', border: '#fff' }}>
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '500px', width: '500px' }} />
                                </Col>
                            </center>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '48rem', border: '#fff' }}>
                            <br />

                            <Card.Body>
                                <Card.Text>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.productName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}> productCategory : {props.location.projectData.productCategory}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>productDescription  : {props.location.projectData.productDescription}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>productPrice: {props.location.projectData.productPrice}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>stockDetail: {props.location.projectData.stockDetail}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>returnDetails: {props.location.projectData.returnDetails}</Row>

                                    <br />

                                    <Form>

                                        <Form.Group controlId="numOfProducts" onChange={onChange}>
                                            <Form.Label>Quantity to Order</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Number of Quantity" name="numOfProducts" />
                                        </Form.Group>

                                        <br /> <br /> <br />

                                    </Form>

                                    <h2> Final Price : {bookingInfo.finalPrice}</h2>

                                    <Row>Final price
                                         <Link to={{
                                            pathname: '/userDashboard/confirmationPage',
                                            projectData: props.location.projectData,
                                            bookingInfo: bookingInfo

                                        }}>
                                            &nbsp;  &nbsp;  &nbsp; <Button >Check Out</Button></Link>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

}

export default DetailsComponent
