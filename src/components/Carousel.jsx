import React from "react";
import Carousel from "react-elastic-carousel";
import Rectangle11 from './images/Rectangle 11.jpg'
import Rectangle12 from './images/Rectangle 12.jpg'
import Rectangle13 from './images/Rectangle 13.jpg'
import Rectangle14 from './images/Rectangle 14.jpg'
import Rectangle16 from './images/Rectangle 16.jpg'

export default function Carous() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];

  return (
    <div className="text-white" style={{width: "80%", margin:"auto"}}>
      <h4 className="mt-4 ms-5 pt-3 pb-3 text-start">Event Images</h4>
      <div>
        <Carousel className="" breakPoints={breakPoints}>
           <img src={Rectangle13} alt="" className="img"/> 
           <img src={Rectangle14} alt="" className="img"/> 
           <img src={Rectangle11} alt="" className="img"/> 
           <img src={Rectangle16} alt="" className="img"/> 
           <img src={Rectangle12} alt="" className="img"/> 
           <img src={Rectangle13} alt="" className="img"/> 
           <img src={Rectangle11} alt="" className="img"/> 
           <img src={Rectangle16} alt="" className="img"/> 
        </Carousel>
      </div>
    </div>
  );
}
