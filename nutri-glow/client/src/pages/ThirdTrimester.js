import React from 'react';
import IntroSection from '../components/IntroSection/IntroSection';
import { Link } from 'react-router-dom';
import StartButton from '../components/StartButton/StartButton';
import TrackerBlock from '../components/TrackerBlock/TrackerBlock';
import BabyInfo from '../components/BabyInfo/BabyInfo';
import SymptomsThird from '../components/SymptomsThird/SymptomsThird';
import TipsThird from '../components/TipsThird/TipsThird';

export default function ThirdTrimester() {
  return (
    <div>
      <IntroSection
        title="Guide to your third Trimester"
        subtitle="Time for the final push!"
        desc="Welcome to the third trimester! Pregnancy is divided into three chunks, known as trimesters…. and we've made it to round three. Over the next few weeks, you will probably start to feel a bit more uncomfortable and tired, but keep your eyes on the prize. In around 12 weeks, you will have a beautiful baby."
        img="/assets/Intro1.png"
        button={
          <Link to={'/signup'}>
            <StartButton text={'Create Account'} />
          </Link>
        }
      />

      <TrackerBlock
        title={'Whats happening in my body?'}
        block={
          'You may be getting a bit of heartburn and indigestion. Thats your growing baby and hormones creating havoc with your digestive system. Your back will also be under strain, thanks to all the extra weight youre now carrying around. It wont help that your joints and ligaments are also looser than usual.Your ankles, feet and face could be puffing out a bit, particularly when its hot. This is probably due to water retention, but get it checked out, just in case its preeclampsia. This is a condition where you may feel perfectly well, but then your blood pressure can get dangerously high, very quickly.A quick-fix for many niggling conditions in the third trimester is to put your feet up. But if you are worried about anything at all, then talk to your midwife or doctor, or call NHS 111.'
        }
        img="/assets/block.png"
      />

      <BabyInfo
        title="Your baby within the third trimester"
        desc="Your baby, or foetus, is around 37.6cm long from head to heel, and weighs about 1kg. That's approximately the size of a pineapple, and the weight of a big bag of brown sugar.

        Your baby's heart rate is changing all the time. Around week 5 or 6, when it was first detectable, it was around 110 beats per minute (bpm). Then it soared to around 170 bpm in week 9-10. Now, it's slowed down to around 140 bpm and it will be around 130 bpm at birth. That's still a lot faster than your heart rate, which will be around 80-85 beats per minute. This is partly because babies' hearts are so small that they can't pump much blood, but they can make up for this by going faster. It also helps to keep them warm.
        
        Your baby's heart can be heard through a stethoscope. Your partner might be able to hear it by putting an ear to your pregnant belly – give it a go, but it's tricky finding the right spot."
        img="/assets/yourBaby.png"
      />

      <TipsThird />

      <SymptomsThird />
    </div>
  );
}
