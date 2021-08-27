import { RiMentalHealthFill } from 'react-icons/ri';
import RangeSlider from './components/RangeSlider/RangeSlider';
import { BsFillLightningFill } from 'react-icons/bs';
import { RiRestaurantFill } from 'react-icons/ri';
import { FaBed } from 'react-icons/fa';

export const Intolerance = [
  {
    name: 'celery-free',
    title: 'Celery Free',
  },
  {
    name: 'crustacean-free',
    title: 'Crustacean Free',
  },
  {
    name: 'dairy-free',
    title: 'Dairy Free',
  },
  {
    name: 'egg-free',
    title: 'Egg Free',
  },
  {
    name: 'fish-free',
    title: 'Fish Free',
  },
  {
    name: 'gluten-free',
    title: 'Gluten Free',
  },
  {
    name: 'wheat-free',
    title: 'Wheat Free',
  },
  {
    name: 'sesame-free',
    title: 'Sesame Free',
  },
  {
    name: 'shelfish-free',
    title: 'Shelfish Free',
  },
  {
    name: 'soy-free',
    title: 'Soy Free',
  },
];

export const Cuisine = [
  {
    name: 'American',
    title: 'American',
  },
  {
    name: 'Asian',
    title: 'Asian',
  },
  {
    name: 'British',
    title: 'British',
  },
  {
    name: 'Caribbean',
    title: 'Caribbean',
  },
  {
    name: 'Central Europe',
    title: 'Central Europe',
  },
  {
    name: 'Chinese',
    title: 'Chinese',
  },
  {
    name: 'Eastern Europe',
    title: 'Eastern Europe',
  },
  {
    name: 'French',
    title: 'French',
  },
  {
    name: 'Indian',
    title: 'Indian',
  },
  {
    name: 'Italian',
    title: 'Italian',
  },
  {
    name: 'Japanese',
    title: 'Japanese',
  },
  {
    name: 'Mediteranean',
    title: 'Mediteranean',
  },
  {
    name: 'Mexican',
    title: 'Mexican',
  },
  {
    name: 'Middle Eastern',
    title: 'Middle Eastern',
  },
  {
    name: 'Nordic',
    title: 'Nordic',
  },
  {
    name: 'South American',
    title: 'South American',
  },
];

export const ProfileCard = [
  {
    icon: <RiMentalHealthFill />,
    quest: 'How is your mental health today?',
    slider: <RangeSlider />,
  },
  {
    icon: <BsFillLightningFill />,
    quest: 'How are your energy levels today?',
    slider: <RangeSlider />,
  },
  {
    icon: <FaBed />,
    quest: 'How many hours did you sleep today?',
    slider: <RangeSlider />,
  },
  {
    icon: <RiRestaurantFill />,
    quest: 'How is your apetite doing today?',
    slider: <RangeSlider />,
  },
];
