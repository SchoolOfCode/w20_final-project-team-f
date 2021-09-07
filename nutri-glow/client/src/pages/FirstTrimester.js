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
        desc="We’ve got all the information you need abou need about your body, your emotions and your baby, week-by-week of your pregnancy"
        img="/assets/Intro1.png"
        button={
          <Link to={'/signup'}>
            <StartButton text={'Create Account'} />
          </Link>
        }
      />

      <TrackerBlock
        title={'Learn everything you need to know about your first months.'}
        block={
          'People often talk about pregnancy as being nine months long. In fact it’s usually slightly longer than this. Your pregnancy is measured from the first day of your last period rather than the day you actually conceived.People often talk about pregnancy as being nine months long. In fact it’s usually slightly longer than this. Your pregnancy is measured from the first day of your last period rather than the day you actually conceived.day of your last period rather than the day you actually conceived.People often talk about pregnancy as being nine months long. In fact it’s usually slightly longer than this. Your pregnancy is measured from the first day of your last period rather than the day you actually conceived.'
        }
        img="/assets/block.png"
      />

      <BabyInfo
        title="Your baby within the first trimester"
        desc="No, there’s no baby or embryo in sight. At least not yet — just an anxious egg and a whole bunch of eager sperm at their respective starting gates.But in weeks 1 and 2 of pregnancy — the week of and immediately following your last menstrual period — your body is working hard to gear up for the event that paves the way for baby: the big O, or ovulation.Right now, your uterus has begun preparing for the arrival of a fertilized egg, though you won't know for sure if that egg has successfully matched up with sperm until next month."
        img="/assets/yourBaby.png"
      />

      <Tips />

      <Symptoms />
    </div>
  );
}
