import React from 'react'
import './Degrees.css'
import Sun from '../../images/sun.jpeg'
import {BiWind} from 'react-icons/bi'
import {GiHeavyRain} from 'react-icons/gi'
import {WiHumidity} from 'react-icons/wi'
function Degrees({data,location}) {
  return (
    <div className= "Degrees">
        <div className='number'>
            <img src={data.condition.icon}/>
        </div>
        <div className='number number2'>
            <div style={{fontSize:'70px'}}>{data.feelslike_c}</div>
            <div>{location}</div>
        </div>
        <div className='number number3'>
            <div className='icons'>
            <div>
                <BiWind/>
            </div>
            <div>{data.gust_mph} mph</div>
            </div>
            <div className='icons'>
            <div>
                <GiHeavyRain/>
            </div>
            <div>{data.precip_mm} mm</div>
            </div>
            <div  className='icons'>
            <div>
                <WiHumidity/>
            </div>
            <div>{data.humidity}%</div>
            </div>
        </div>
    </div>
  )
}

export default Degrees