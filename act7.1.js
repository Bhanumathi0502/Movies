import './act7.1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

import Movie from './Movies';
import { useState,useEffect } from 'react';
export default function App(){
  const[data,setData]=useState(null)
  const[load,setLoad]=useState(false)
  useEffect(()=>{
const fetchData=async()=>{
  let result =await fetch("./Movies.json")
let newData=await result.json();
setData(newData)
setLoad(true)

};fetchData();


  },[])

  return(<>
  <div>{load && data.movies.map((item,k)=><Movie title={item.title} 
  Show_Time={item.showTime} Screen={item.screen} Row={item.row}Seat={item.seat} imageUrl={item.imageUrl}></Movie>)}</div>
  
  </>)
}
