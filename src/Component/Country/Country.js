import React from 'react';

const Country = (props) => {
const {name, flag, capital} = props.country;
    return (
        <div>
             <h1>Name: {name}</h1>
            <img src={flag} alt="" />
            <h3>Capital: {capital}</h3>
           
        </div>
    );
};

export default Country;