import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import VendorsDashHeader from './CommonComponents/VendorsDashHeader';
import VendorsDashUI from './VendorsDashHome/VendorsDashUI';
import AddProduct from './AddProduct/AddProduct';
import { Route } from "react-router-dom";
import UploadProductImage from './AddProduct/UploadProductImage';
import ShowProducts from './ShowProducts/ShowProducts';
import ModifyProductModal from './ShowProducts/ModifyProducts/ModifyProductModal';

const VendorsDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <VendorsDashHeader logout={props.history} />

            <Route exact path="/vendorDashboard" component={VendorsDashUI} />
            <Route exact path="/vendorDashboard/createJobOpenings" component={AddProduct} />
            <Route exact path="/vendorDashboard/uploadProjectImage" component={UploadProductImage} />

            <Route exact path="/vendorDashboard/showProjects" component={ShowProducts} />
            <Route exact path="/vendorDashboard/showProjects/modal/modifyProject" component={ModifyProductModal} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/users/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default VendorsDashContainer
