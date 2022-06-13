import React from "react";
import Frame19115 from "./images/Frame 19115.jpg"

export default function Header() {
  return (
    <div className=" text-white" >
      <div>
        <img src={Frame19115} alt="" style={{width:"100%"}}/>
      </div>
      <div className="container">
         <h1 style={{display:"flex"}}>Event name</h1>
         <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rerum enim! Ipsa voluptatibus impedit rerum officiis, rem nesciunt voluptas suscipit, accusantium vero est nihil excepturi unde aspernatur possimus repellendus a quisquam provident culpa. Porro, et temporibus amet sdam. Quisquam neque quod temporibus natus! Eos, voluptas rerum.</p>

         <div className="d-flex justify-content-between">
             <p className="bi bi-pin-map"> &nbsp; lorem</p>
              <p className="bi bi-calendar-date">&nbsp;10th May</p>
         </div>
         <div className="d-flex justify-content-between">
             <p className="bi bi-easel"> &nbsp; Dance & Arts</p>
              <p className="bi bi-alarm">&nbsp; 07:00 PM</p>
          </div>
      </div>
    </div>
  );
}
