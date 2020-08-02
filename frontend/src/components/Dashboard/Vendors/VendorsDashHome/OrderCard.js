import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const OrderCard = (props) => {

    const [userDataWhoBooked, setUserDataWhoBooked] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#A1C4FF', margin: 25 }}>
                <Card.Body>
                    <Card.Title className="bg-primary" style={{ height: '30px', color: '#fff' }}>{userDataWhoBooked.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"  >{props.bookingData.consumerEmail}</Card.Subtitle>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" }}>
                        Ordered by above User
                    </Card.Text>
                    <Card.Footer style={{ color:'#fff' }}>  Booked Quantity : {props.bookingData.selectedQuantity} <br />
Final Price : {props.bookingData.finalPrice} <br /></Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': props.bookingData.consumerEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setUserDataWhoBooked(data[0])
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default OrderCard
