import React from 'react';
import ParkingSpace from "./ParkingSpace";
import Details from "./Details";

export default function Parking({setCount, count, increaseCounter}) {
  return (
    <div className="container-fluid">
    <div className="row ">
      <Details increaseCounter={increaseCounter} count={count}/>
      <ParkingSpace count={count}/>
    </div>
  </div>

  )
}
