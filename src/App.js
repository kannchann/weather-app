import { useEffect } from 'react';
import './App.css';
import Days from './components/Days/Days';
import Degrees from './components/Degrees/Degrees';
import Location from './components/Location/Location.js';
import {useState} from 'react'
import axios from 'axios'
import { BiData } from 'react-icons/bi';
function App() {
  
  useEffect(()=>{
    axios.get("http://api.weatherapi.com/v1/forecast.json?key=b085fb431ed645c78ef102334230206&q=kathmandu&days=5&aqi=no&alerts=no").then((response)=>{
    setData(response.data)
    console.log(response.data)
    })
  },[])

  const handleLocationChange = (newLocation) =>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=b085fb431ed645c78ef102334230206&q=${newLocation}&days=5&aqi=no&alerts=no`).then((response)=>{
    setData(response.data)
    console.log(response.data)
    }).catch((error)=>{
      console.log("no location found")
    })
  }





  const [data,setData] = useState([])



  return (
    data?<div className="App">
    <h1 style={{color:'black', fontFamily:'fantasy', fontWeight:'normal', borderBottom:'2px black solid'}}>WEATHER APP</h1>
    < Location data={data.current} handleLocationChange = {handleLocationChange}/>
    < Degrees data={data.current}/>
    < Days data = {data.forecast.forecastday}/>
  </div>:<div></div>
  );
}

export default App;
