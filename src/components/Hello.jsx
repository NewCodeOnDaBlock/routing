import React,{useState} from 'react';
import { useParams } from 'react-router';

const Hello = (props) => {
    const {word} = useParams();
    const {colorone} = useParams();
    const {colortwo} = useParams();
    const {colorthree} = useParams();

    return (

        <div style={{backgroundColor: colorone, height: 40}}>
            <p style={{color: colortwo}}> The Word is: <span style={{color: colorthree}}>{word}</span> </p>
        </div>

    );
}
export default Hello;