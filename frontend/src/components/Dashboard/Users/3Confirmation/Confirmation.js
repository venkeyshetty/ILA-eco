import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#4BCB00' }}><Card.Body>
                    <Card.Title style={{ color:'#fff' }}>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col style={{ color:'#fff' }}>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col style={{ color:'#fff' }}>
                            <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.productName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}> productCategory : {props.location.projectData.productCategory}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>productDescription  : {props.location.projectData.productDescription}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>productPrice: {props.location.projectData.productPrice}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>stockDetail: {props.location.projectData.stockDetail}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>returnDetails: {props.location.projectData.returnDetails}</Row>



Booked Quantity : {props.location.bookingInfo.selectedQuantity} <br />
Final Price : {props.location.bookingInfo.finalPrice} <br />

                        </Col>
                    </Row>
                    <Button variant="primary"><Link to='/userDashboard/paymentsGateway' style={{ color: '#fff' }} onClick={confirmBookingAtServer}>Confirm Order</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "selectedQuantity": props.location.bookingInfo.selectedQuantity,
                "finalPrice": props.location.bookingInfo.finalPrice

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
