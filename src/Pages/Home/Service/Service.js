import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    //const {service} = props.
    const { img, name, price, time, description, } = service;


    return (
        <div className="service">
            <img className="service-img" src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h5>Time: {time} Days </h5>
            <p>We Provide You: {description}</p>
        </div>
    );
};

export default Service;