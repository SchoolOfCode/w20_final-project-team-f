import { auth, db } from '../../firebase';
import React, { useReducer, useState, useEffect } from 'react';
import { ProfileCard } from '../../data';
import RangeSlider from '../RangeSlider/RangeSlider';

import './ProfileIntro.scss';

export default function ProfileIntro() {
  let [usersName, setUsersName] = useState('');

  useEffect(() => {
    db.once('value', (snapshot) => {
      try {
        let profile = snapshot.child(auth.currentUser.uid).val();
        try {
          console.log(profile);
          setUsersName(profile.displayFullName);
        } catch (error) {}
      } catch (error) {}
    });
  }, [db]);

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
            return {
              ...state,
              qouteCard1:
                "Each morning we are born again. What we do today is what matters most...Talk to your midwife, they're here to help.",
            };
          }
          if (action.sliderValue > 5 && action.sliderValue <= 10) {
            // check if the slider value is between 5 & 10 if true set the qoute to you are great
            return {
              ...state,
              qouteCard1:
                "You're doing great! Your baby can pick up on your emotions, so staying positive is the best thing you can do for them.",
            };
          }
          // ^^ you can add more conditions based on the slider value
        }

        if (action.id === 2) {
          // same as above but with a new id
          if (action.sliderValue >= 1 && action.sliderValue < 5) {
            return {
              ...state,
              qouteCard2:
                'Nothing wipes you out like a good dose of pregnancy. Check out your recommended articles for energy boosting meals!',
            };
          }
          if (action.sliderValue > 5 && action.sliderValue <= 10) {
            return {
              ...state,
              qouteCard2:
                'Pregnancy is such an exciting time for new parents. Keep track of what makes you feel good so you always have a go to',
            };
          }
        }

        if (action.id === 3) {
          // same as above but with a new id
          if (action.sliderValue >= 1 && action.sliderValue < 6) {
            return {
              ...state,
              qouteCard3:
                'Between 7 and 9 hours of sleep is ideal. Try relaxing two hours before bedtime to slowly wind down.',
            };
          }
          if (action.sliderValue >= 6 && action.sliderValue <= 8) {
            return {
              ...state,
              qouteCard3:
                'Getting a good amount of sleep is especially important when youre pregnant because it can affect your labor and delivery, good job!',
            };
          }
          if (action.sliderValue > 8 && action.sliderValue < 10) {
            return {
              ...state,
              qouteCard3: 'Try and aim for between 6 and 8 hours sleep',
            };
          }
        }

        if (action.id === 4) {
          // same as above but with a new id
          if (action.sliderValue >= 1 && action.sliderValue < 5) {
            return {
              ...state,
              qouteCard4:
                'Use the filters on the recipe page to find the best recipes for you. Implement snacking on healthy foods!',
            };
          }
          if (action.sliderValue > 5 && action.sliderValue <= 10) {
            return {
              ...state,
              qouteCard4:
                'Eating a healthy diet during pregnancy is linked to good brain development, a healthy birth weight, and can reduce the risk of many birth defects.',
            };
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
