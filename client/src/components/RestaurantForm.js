import React, { useEffect } from "react";

const RestaurantForm = () => {
    /*useEffect(()=>{
        // console.log(user)
        const fetchUrl = async()=>{
            const url = `https://api.postalpincode.in/pincode/${user.pincode}`
            const rep = await fetch(url)
            const repJson = await rep.json()
            if(repJson[0].Status==="Success"){
                // console.log( {city:repJson[0].PostOffice[0].District,state:repJson[0].PostOffice[0].State,country:repJson[0].PostOffice[0].Country})
                let city=repJson[0].PostOffice[0].District
                let state=repJson[0].PostOffice[0].State
                let country=repJson[0].PostOffice[0].Country
                setPos({...pos,city:city,state:state,country:country})
                
            }
            
        }
        fetchUrl()
        console.log(pos)
    },[user.pincode]) */
    return (
        <div className="ResForm">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input
                type="text"
                name="cno"
                id="cno"
                placeholder="Mobile Number"
            />
            <input
                type="text"
                name="rname"
                id="rname"
                placeholder="Restaurant Name"
            />
            <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
            />
            <input
                type="text"
                name="pincode"
                id="pincode"
                placeholder="Pincode"
            />
            <div className="inline_input">
                <input type="text" name="city" id="city" placeholder="City" />
                <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                />
            </div>

            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password"
            />
        </div>
    );
};

export default RestaurantForm;
