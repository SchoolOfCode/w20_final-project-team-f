import React, { useEffect, useState } from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { RiMentalHealthFill, RiRestaurantFill } from 'react-icons/ri';
import { ProfileCard } from '../../data';
import { auth, db } from '../../firebase';
import HealthCard from './HealthCard/HealthCard';
import './ProfileIntro.scss';

export default function ProfileIntro() {


  let [usersName,setUsersName]=useState("")




  useEffect(()=>{

    console.log("im being called")
    
    db.once("value",(snapshot)=>{
      
      try {

        let profile = snapshot.child(auth.currentUser.uid).val() 
        
        
        try { 
          console.log(profile)
          console.log("profile is where the profile iss aaaatt")
          setUsersName(profile.displayFullName)
        } catch (error) {
          
        }

      } catch (error) {
       
      }
    })
  
},[db])
  
let [quote1,setquote1] = useState('How is your mental health today?')

let [quote2,setquote2] = useState('How are your energy levels today?')

let [quote3,setquote3] = useState('How many hours did you sleep today?')

let [quote4,setquote4] = useState('How is your apetite doing today?')


  return (
    <div className="profileIntro">
      <h1>Hi {usersName}</h1>
      <h2>How are you today?</h2>
      <div className="containerIntro">
        <HealthCard icon={<RiMentalHealthFill />} qoute={quote1} />
        <HealthCard icon={<BsFillLightningFill />} qoute={quote2} />
        <HealthCard icon={<FaBed />} qoute={quote3}/>
        <HealthCard icon={<RiRestaurantFill/>} qoute={quote4} />

        {/* {ProfileCard.map((card) => {
          console.log(card.slider)
          return(
          <div className="cardContainer">
            <div className="topCard">
              <div className="icon">{card.icon}</div>
            </div>
            <div className="centerCard">
              <h2>{card.quest}</h2>
            </div>
            <div className="bottomCard">
              <div className="slider">{card.slider}</div>
            </div>
          </div>
        )})} */}

        
      </div>
    </div>
  );
}
