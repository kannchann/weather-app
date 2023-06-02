import React from 'react'
import './Days.css'
import {BsCloudSunFill} from 'react-icons/bs'

function Days({data}) {
  return (
    <div className='Days'>
{
    data.map(day=>{
        return(<div className='day'>
        <div>
            <img src={day.day.condition.icon}/>
        </div>
        <div>70&deg;/60&deg;</div>
        <div>TOM</div>
    </div>)
    })
}

        
    
    </div>
  )
}

export default Days