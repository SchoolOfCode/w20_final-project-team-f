import React from 'react';
import IntroSection from '../components/IntroSection/IntroSection';
import { Link } from 'react-router-dom';
import StartButton from '../components/StartButton/StartButton';
import TrackerBlock from '../components/TrackerBlock/TrackerBlock';
import BabyInfo from '../components/BabyInfo/BabyInfo';
import SymptomsSecond from '../components/SymptonsSecond/SymptomsSecond';
import TipsSecond from '../components/TipsSecond/TipsSecond';

export default function SecondTrimester() {
  return (
    <div>
      <IntroSection
        title="Guide to your second Trimester"
        subtitle="Forwards and updwards!"
        desc="The second trimester is the middle three months of your pregnancy. This is a time when lots of women tell the world they’re pregnant and begin to feel like the pregnancy is more ‘real’."
        img="/assets/Intro1.png"
        button={
          <Link to={'/signup'}>
            <StartButton text={'Create Account'} />
          </Link>
        }
      />

      <TrackerBlock
        title={'Learn everything you need to know about your second trimester.'}
        block={
          'The second trimester of your pregnancy is from week 13 to week 28 - roughly months four, five and six.As well as feeling and looking more pregnant during these weeks, you may also have more energy than you did in the first trimester. This will come as a great relief if you have been struggling with sickness, tiredness or anxiety about getting through the first trimester. Get weekly updates and views from our expert midwives straight to your inbox. As you go through the second trimester, you’ll gradually see your bump grow and later youll start to feel your baby moving.'
        }
        img="/assets/second.jpg"
      />

      <BabyInfo
        title="Your baby within the second trimester"
        desc="Now that all the major organs and systems have formed in the fetus, the following six months will be spent growing. The weight of the fetus will multiply more than seven times over the next few months as the fetus becomes a baby that can survive outside of the uterus.By the end of the second trimester, the fetus will be about 13 to 16 inches long and weighs about 2 to 3 pounds. Fetal development during the second trimester includes the following: - The fetus kicks, moves, and can turn from side to side.The eyes have been gradually moving to the front of the face and the ears have moved from the neck to the sides of the head. The fetus can hear the mother's voice.
       "
        img="/assets/group.jpg"
      />

      <TipsSecond />

      <SymptomsSecond />
    </div>
  );
}
