import React from 'react';
import TrackerIntro from '../components/TrackerIntro/TrackerIntro';

export default function PregTracker() {
  return (
    <div>
      <TrackerIntro
        title={'Pregancy calendar'}
        desc={'Your trimesterly guide to the stages of your pregnancy'}
        text={
          'We’ve got all the information you need about your body, your emotions and your baby, week-by-week of your pregnancy.'
        }
        intro={'Not sure if you are pregnant?'}
        button={'See early signs'}
      />
    </div>
  );
}
