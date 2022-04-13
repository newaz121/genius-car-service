import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {id,name,img,description,price}=service;
    const navigate=useNavigate();

    const navigateToServiceDetail =id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p><small>{price}</small></p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)}>Book:{name}</button>
            
        </div>
    );
};

export default Service;