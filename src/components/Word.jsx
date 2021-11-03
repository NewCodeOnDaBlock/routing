import React, {useState} from 'react';
import { useParams } from 'react-router';

const Word = () => {
    const {word} = useParams();

    return(

        <p>The word is: {word}</p>
    )
}
export default Word;