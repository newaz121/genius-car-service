import React from 'react';
import notfound from '../../img/Apathy3.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>404</h1>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;