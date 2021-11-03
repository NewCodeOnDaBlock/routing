import React, {useState} from 'react';
import { useParams } from 'react-router';

const Number = () => {
    const {number} = useParams();


    return(

        <p>This is number: {number}</p>
    )

}
export default Number;