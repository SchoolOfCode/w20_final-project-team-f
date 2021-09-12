import React from 'react';
import { Link } from 'react-router-dom';
import IntroCard from '../components/IntroCard/IntroCard';
import StartButton from '../components/StartButton/StartButton';

export default function Home() {
  return (
    <div>
      <IntroCard
        title={'Let us help you'}
        desc={'on your special journey'}
        text={
          'Using research from experienced dieticians, NutriGlow provides a health and wellbeing platform for pregnancy and Parenthood. '
        }
        button={
          <Link to={'/signup'}>
            <StartButton text={'Start Now'} />
          </Link>
        }
      />
    </div>
  );
}
