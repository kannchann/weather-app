import React from 'react'
import './Location.css'

function Location({data,handleLocationChange})
{
    console.log(data)
    return(
        <div className="header">
            <div>Right now in </div>
            <div>
            <input type="text" name="location" className= "location" onChange={(e)=>{handleLocationChange
            (e.target.value)}}/>
            </div>
            <div className= "weather">, it is {data.condition.text}</div>
        </div>
    )
}

export default Location
