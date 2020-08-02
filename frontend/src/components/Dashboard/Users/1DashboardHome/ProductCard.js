import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.projectData.imageName} style={{ padding: 10 }} />
                <Card.Body>
                    <Card.Title>{props.projectData.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.projectData.productCategory}| ₹ {props.projectData.productPrice}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/userDashboard/moreDetails',
                        projectData: props.projectData
                    }}><Button variant="primary">Order Now</Button></Link>
                </Card.Body>
                <Card.Footer style={{ backgroundColor:'#A1C4FF' }}>
                    <small style={{ color:'#fff' }}>{props.projectData.stockDetail}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductCard
