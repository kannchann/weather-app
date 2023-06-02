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
        <div>{day.day.mintemp_c}&deg;/{day.day.maxtemp_c}&deg;</div>
        <div>{day.date}</div>
    </div>)
    })
}

        
    
    </div>
  )
}

export default Days