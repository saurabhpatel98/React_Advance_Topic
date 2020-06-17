import React from 'react'

export default function Image(props){

    if(props.val==="noimg"){
        throw new Error('Image Not Found')
    }
    return (<img src={props.val} width="200"/>);
}