import React from "react";
import { useState, useEffect } from "react";

export default function Details({ increaseCounter, count }) {
  const [RNum, setRNum] = useState(localStorage.getItem("RNum") ?? "");
  const [Model, setModel] = useState(localStorage.getItem("Model") ?? "");
  const [Color, setColor] = useState(localStorage.getItem("Color") ?? "");
  const [Time, setTime] = useState(localStorage.getItem("Time") ?? "");
  const [car, setCar] = useState();

  useEffect(() => {
    // storing input name
    window.localStorage.setItem("RNum", JSON.stringify(RNum));
    window.localStorage.setItem("Model", JSON.stringify(Model));
    window.localStorage.setItem("Color", JSON.stringify(Color));
    window.localStorage.setItem("Time", JSON.stringify(Time));
  }, [RNum, Model, Color, Time]);

  const array_car = [
    { color: "blue", Rno: "1" },
    { color: "green", Rno: "2" },
    { color: "black", Rno: "3" },
    { color: "red", Rno: "4" },
    { color: "white", Rno: "5" },
    { color: "blue", Rno: "6" },
  ];

  return (
    <div className="col-3" style={{ backgroundColor: "pink" }}>
      <form>
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Number
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticnumber"
            value={count}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Registration Number</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Rno."
            value={RNum}
            onChange={(e) => setRNum(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Car Model</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="car"
            value={Model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput2">Car Color</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="car color"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Arrival Time</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="entry time"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </form>
      <button
        class="btn btn-primary mb-1"
        onClick={() => {
          increaseCounter();
        }}
      >
        Park Me!
      </button>
      <br />
      <hr />
      <h4>Check which Registration Number belongs to which car?</h4>
      <h6>Choose the color from the list below and you'll be given the list of Registration number</h6>
      <select value={car} onChange={(e) => setCar(e.target.value)}>
        {array_car.map((user) => (
          <option value={user.color}>{user.color}</option>
        ))}
      </select>
      {array_car
        .filter((name) => name.color === car)
        .map((register) => (
          <li>{register.Rno}</li>
        ))}
    </div>
  );
}
