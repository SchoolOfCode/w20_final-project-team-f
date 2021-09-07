import React from 'react';
import TrackerBlock from '../components/TrackerBlock/TrackerBlock';
import TrackerCategories from '../components/TrackerCategories/TrackerCategories';
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
        img="/assets/tracker1.png"
      />

      <TrackerBlock
        title={'What is a trimester?'}
        block={
          'People often talk about pregnancy as being nine months long. In fact it’s usually slightly longer than this. Your pregnancy is measured from the first day of your last period rather than the day you actually conceived. A pregnancy generally lasts around 40 weeks, and your dates are referred to in weeks because this is more accurate than talking in months.Your pregnancy has three phases, called trimesters, and each trimester is about three months long. Each trimester has its own mix of highs and lows, and you can find out what to expect in this pregnancy calendar. The information in the calendar may be helpful for the people close to you as well.'
        }
        img="/assets/block.png"
      />

      <TrackerCategories />
    </div>
  );
}
