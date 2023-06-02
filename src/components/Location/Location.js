import React from 'react'
import './Location.css'
import { useState } from 'react'

function Location({data,handleLocationChange})
{
    const[size,setSize]=useState(1)
    
    console.log(data)
    function handleType(e)
    {
        handleLocationChange(e.target.value)
        setSize(e.target.value.length==0?1:e.target.value.length)
        
    
    }
    return(

        <div className="header">
            <div>Right now in </div>
            <div>
            <input type="text" name="location" className= "location" onChange={(e)=>{handleType
            (e)} } size={size}/>
            </div>
            <div className= "weather">, it is {data.condition.text}</div>
        </div>
    )
}



export default Location
