import { auth,db} from "../../firebase"
import React, { useReducer , useState, useEffect} from 'react';
import { ProfileCard } from '../../data';
import RangeSlider from '../RangeSlider/RangeSlider';

import './ProfileIntro.scss';

export default function ProfileIntro() {

  let [usersName,setUsersName]=useState("")

  useEffect(()=>{

    db.once("value",(snapshot)=>{
      try {
        let profile = snapshot.child(auth.currentUser.uid).val()  
        try { 
          console.log(profile)
          setUsersName(profile.displayFullName)
        } catch (error) {
        }

      } catch (error) {
       
      }
    })
  
  },[db])



  let initialState = {
    qouteCard1: 'How is your mental health today?',
    qouteCard2: 'How are your energy levels today?',
    qouteCard3: 'How many hours did you sleep today?',
    qouteCard4: 'How is your apetite doing today?',
  };
  // ^^^^ never touch this unless you want to change the initial state AKA when the page loads its the first thing you see, if you want to update the state use the dispatch function

  function reducer(state, action) {
    switch (action.type) {
      case 'CARDQOUTE':
        if (action.id === 1) {
          // ^^^ if the id is the same as the number then ..
          if (action.sliderValue >= 1 && action.sliderValue < 5) {
            // check if the slider value is between 1 or 5 if true set the qoute to you are great
            return { ...state, qouteCard1: 'Would you like to talk to someone?' };
          }
          if (action.sliderValue > 5 && action.sliderValue <= 10) {
            // check if the slider value is between 5 & 10 if true set the qoute to you are great
            return { ...state, qouteCard1: "Hey sunshine, you're awesome!" };
          }
          // ^^ you can add more conditions based on the slider value
        }

        if (action.id === 2) {
          // same as above but with a new id
          if (action.sliderValue >= 1 && action.sliderValue < 5) {
            return { ...state, qouteCard2: 'Check out your recommended articles for energy boosting food!' };
          }
          if (action.sliderValue > 5 && action.sliderValue <= 10) {
            return { ...state, qouteCard2: "Who's kicking butts? You are!" };
          }
        }

        if (action.id === 3) {
          // same as above but with a new id
          if (action.sliderValue >= 1 && action.sliderValue < 6) {
            return { ...state, qouteCard3: 'Try and aim for between 6 and 8 hours sleep' };
          }
          if (action.sliderValue >= 6 && action.sliderValue <= 8) {
            return { ...state, qouteCard3: 'Sleeping beauty, you are doing great!' };
          }
          if (action.sliderValue > 8 && action.sliderValue < 10) {
            return { ...state, qouteCard3: 'Try and aim for between 6 and 8 hours sleep' };
          }
        }

        if (action.id === 4) {
          // same as above but with a new id
          if (action.sliderValue >= 1 && action.sliderValue < 5) {
            return { ...state, qouteCard4: 'Check out our recipes for delicous tasting food ideas!' };
          }
          if (action.sliderValue > 5 && action.sliderValue <= 10) {
            return { ...state, qouteCard4: "Guess who's coming for dinner? 😀 " };
          }
        }
        return { ...state };

      default:
        break;
    }
  }

  let [state, dispatch] = useReducer(reducer, initialState);

  // ^ just sets the state, and chnages state with dispatch

  return (
    <div className="profileIntro">
      <h1>Hello Jack{usersName}</h1>
      <h2>How are you today?</h2>
      <div className="containerIntro">
        {ProfileCard.map((card) => {
          return (
            <div className="cardContainer">
              <div className="topCard">
                <div className="icon">{card.icon}</div>
              </div>
              <div className="centerCard">
                <h2>
                  {card.id === 1
                    ? state.qouteCard1
                    : card.id === 2
                    ? state.qouteCard2
                    : card.id === 3
                    ? state.qouteCard3
                    : state.qouteCard4}
                  {/* ^ if the id == the number then return the qoute from the inistialState.qouteCard1 aka state.qouteCard1 */}
                </h2>
              </div>
              <div className="bottomCard">
                <div className="slider">
                  <RangeSlider id={card.id} dispatch={dispatch} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
