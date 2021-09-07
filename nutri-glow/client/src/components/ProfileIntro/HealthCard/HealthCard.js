import { useRef, useState } from "react";
import RangeSlider from "../../RangeSlider/RangeSlider";
import "../ProfileIntro.scss"

const HealthCard = ({icon,qoute}) => {


  let [volume,setVolume]= useState("")


  let slider = useRef(null)



  


  return ( 
    <div className="cardContainer">
      <div className="topCard">
        <div className="icon">{icon}</div>
      </div>
      <div className="centerCard">
        <h2>{qoute}</h2>
      </div>
      <div className="bottomCard">
        <div className="slider">
          <RangeSlider />
        </div>
      </div>
    </div>
   );
}
 
export default HealthCard;