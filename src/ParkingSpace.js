import React from "react";
import { useEffect } from "react";

export default function ParkingSpace({ count }) {
  useEffect(() => {
    window.alert("car number " + count + " is added");
  }, [count]);

  return (
    <div className="col-9" style={{ backgroundColor: "#90EE90" }}>
      <section>
        {Array.from({ length: count }, (_, i) => (
          <span key={i}><img src="https://cdn-icons-png.flaticon.com/512/55/55283.png" alt="car-parked" className="car-size"/></span>
        ))}
      </section>
    </div>
  );
}
