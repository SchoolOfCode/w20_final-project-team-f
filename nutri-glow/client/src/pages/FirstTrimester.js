import React from 'react';
import IntroSection from '../components/IntroSection/IntroSection';
import { Link } from 'react-router-dom';
import StartButton from '../components/StartButton/StartButton';
import TrackerBlock from '../components/TrackerBlock/TrackerBlock';
import BabyInfo from '../components/BabyInfo/BabyInfo';
import Tips from '../components/Tips/Tips';
import Symptoms from '../components/Symptoms/Symptoms';

export default function FirstTrimester() {
  return (
    <div>
      <IntroSection
        title="Guide to your first Trimester"
        subtitle="Congratulations!"
        desc="We’ve got all the information you need about need about your body, your emotions and your baby, week-by-week of your pregnancy"
        img="/assets/Intro1.png"
        button={
          <Link to={'/signup'}>
            <StartButton text={'Create Account'} />
          </Link>
        }
        back={
          <Link to={'/tracker'}>
            <StartButton text={'Back to Tracker'} />
          </Link>
        }
      />

      <TrackerBlock
        title={'Learn everything you need to know about your first months.'}
        block={
          'Welcome to the first trimester of pregnancy. This is the start of a wonderful journey, and it’s natural to have lots of questions about what’s in store for you in the weeks and months ahead. We’ve compiled some essential information on foetal development during the first trimester, common early pregnancy symptoms and what kinds of things are in store for you this trimester. The first trimester is about 12 weeks long, and it actually starts before you become pregnant. This is because your estimated due date is usually calculated from the first day of your last menstrual period (LMP). A normal pregnancy is about 37 to 42 weeks long, and your doctor will calculate 40 weeks from the start of your last period to estimate when you’re due. If you havent been to your doctor yet, you can use our Due Date Calculator to get a quick estimate.Keep in mind that most babies aren’t born exactly on their due date, which are only estimates. Rather, they are typically born in the week before or after the date. Your pregnancy is considered full term at 37 weeks.'
        }
        img="/assets/block.png"
      />

      <BabyInfo
        title="Your baby within the first trimester"
        desc="The first trimester begins on the first day of your last period and lasts until the end of week 12. This means that by the time you know for sure you're pregnant, you might already be five or six weeks pregnant! 

        A lot happens during these first three months. The fertilised egg rapidly divides into layers of cells and implants in the wall of your womb where it carries on growing. These layers of cells become an embryo, which is what the baby is called at this stage.
        
        During this trimester, your baby grows faster than at any other time. By six weeks, a heartbeat can usually be heard and by the end of week 12, your baby's bones, muscles and all the organs of the body have formed. At this point, your baby looks like a tiny human being and is now called a fetus. He or she will even be practising swallowing!"
        img="/assets/yourBaby.png"
      />

      <Tips />

      <Symptoms />
    </div>
  );
}
