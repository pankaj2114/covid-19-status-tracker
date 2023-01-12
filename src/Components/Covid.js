import React, { useState } from 'react';
import { useEffect } from 'react';
import './Covid.css';

const Covid = () => {
    const[data, setData]=useState([])
    const getCovidData = async () =>{
      try{
        const res= await fetch('https://data.covid19india.org/data.json')
       const actualData=await res.json();
       setData(actualData.statewise[0]);
      }  catch(err){
        console.log(err);
      }        
    }
    useEffect(()=>{
       getCovidData();
    },[]);
  return (
    <>
    <div className='heading'>
        <h2>🔴Live</h2>
      <h1>Live Covid 19 Coronavirous Tracker</h1>
      </div>
    <div className="container">
    <div className="card-container">
        <div className="card card1">
        <h1 className='card-name'><span>Our</span> Country</h1>
        <h1 className='count'>India</h1>
        </div>
        <div className="card card2">
        <h1 className='card-name'><span>total</span> recovered</h1>
        <h1 className='count'>{data.recovered}</h1>
        </div>
        <div className="card card3">
        <h1 className='card-name'><span>Total</span> confirmed</h1>
        <h1 className='count'>{data.confirmed}</h1>
        </div>
        <div className="card card4">
        <h1 className='card-name'><span>Total</span> death</h1>
        <h1 className='count'>{data.deaths}</h1>
        </div>
        <div className="card card5">
        <h1 className='card-name'><span>Total</span> Active</h1>
        <h1 className='count'>{data.active}</h1>
        </div>
        <div className="card card6">
        <h1 className='card-name'><span>Last</span> Updated</h1>
        <h1 className='count'>{data.lastupdatedtime}</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Covid
