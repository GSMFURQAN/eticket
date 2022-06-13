import React from "react";
import Rectangle14 from './images/Rectangle 14.png'
import Ellipse41 from './images/Ellipse 41.png'
import Vector from './images/Vector.png'


export default function Content() {
  return (
    <div className=" text-white mt-4 container">
      <div className=" row  ">
        <div className="col-6 text-start card bg-dark">
          <img src={Rectangle14} className="card-img-top p-1" alt="" />
          <div className="card-body bg-dark text-center text-white">
            <p className="card-text">Cologne, Germany</p>
          </div>
        </div>

        <div className=" col-6 ps-5">
          <div className="d-flex border-top border-bottom  border-secondary py-2">
            <div className=" mt-1">
              <img src={Ellipse41} alt="" />
            </div>
            <div className=" mt-3 ms-3">
              <h6 className="">Event Organiser name</h6>
              <p className="">12 events</p>
            </div>
            <div className="mt-3 ms-auto">
              <img src={Vector} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-6 mt-3 text-start">
              <p>Ticket starts at</p>
              <h5>
                15,00 <sub> EUR</sub>
              </h5>
            </div>
            <div className="col-6 mt-4 text-end">
              <button className="btn btn-light" style={{width:"100%"}}>Buy a ticket</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
