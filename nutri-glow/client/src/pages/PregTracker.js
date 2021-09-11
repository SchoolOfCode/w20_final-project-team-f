import React from 'react';
import TrackerBlock from '../components/TrackerBlock/TrackerBlock';
import TrackerCategories from '../components/TrackerCategories/TrackerCategories';
import TrackerIntro from '../components/TrackerIntro/TrackerIntro';
import QuoteBlock from '../components/QuoteBlock/QuoteBlock';

export default function PregTracker() {
  return (
    <div>
      <TrackerIntro
        title={'Pregancy calendar'}
        desc={'Your trimesterly guide to walk you through every stage'}
        text={
          'We’ve got all the information you need to take you through the next 9 months. With this guide you’ll be able to keep track of your progress.'
        }
        intro={'Not sure if you are pregnant?'}
        button={'See early signs'}
        img="/assets/tracker1.png"
      />

      <TrackerBlock
        title={'What is a trimester?'}
        block={
          'Pregnancy might leave you feeling delighted, anxious, exhilarated and exhausted — sometimes all at once. Even if youre thrilled about being pregnant, a new baby adds emotional stress to your life. Its natural to worry about your babys health, your adjustment to parenthood and the financial demands of raising a child. If youre working, you might worry about how to balance the demands of family and career. You might also experience mood swings. What youre feeling is normal. Take care of yourself, and look to loved ones for understanding and encouragement. If your mood changes become severe or intense, consult your health care provider. People often talk about pregnancy as being nine months long. In fact it’s usually slightly longer than this. Your pregnancy is measured from the first day of your last period rather than the day you actually conceived. A pregnancy generally lasts around 40 weeks, and your dates are referred to in weeks because this is more accurate than talking in months.Your pregnancy has three phases, called trimesters, and each trimester is about three months long. Each trimester has its own mix of highs and lows, and you can find out what to expect in this pregnancy calendar. The information in the calendar may be helpful for the people close to you as well.'
        }
        img="/assets/block.png"
      />

      <TrackerCategories />
      <QuoteBlock
        text='"In giving birth to our babies, we may find that we give birth to new possibilities within ourselves."'
        author="- Myla and Jon Kabat-Zinn"
      />
    </div>
  );
}
