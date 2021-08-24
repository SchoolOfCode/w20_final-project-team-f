import React from 'react';
import { Link } from 'react-router-dom';
import IntroCard from '../components/IntroCard/IntroCard';
import StartButton from '../components/StartButton/StartButton';

export default function Home() {
  return (
    <div>
      <IntroCard
        title={'Have a wonderful'}
        desc={'mother journey'}
        text={
          'Imagine having your own personal helper who helps you to look after yourself and your baby!'
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
