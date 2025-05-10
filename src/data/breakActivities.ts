
export type BreakType = 'breathing' | 'stretch' | 'eye' | 'quote' | 'mindful';

export interface BreakActivity {
  id: string;
  type: BreakType;
  title: string;
  description: string;
  duration?: number; // in seconds
}

export const breakActivities: BreakActivity[] = [
  // Breathing exercises
  {
    id: 'breathing-1',
    type: 'breathing',
    title: 'Box Breathing',
    description: 'Breathe in for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat.',
    duration: 60
  },
  {
    id: 'breathing-2',
    type: 'breathing',
    title: '4-7-8 Breathing',
    description: 'Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Repeat.',
    duration: 60
  },
  {
    id: 'breathing-3',
    type: 'breathing',
    title: 'Deep Belly Breathing',
    description: 'Place your hand on your belly. Breathe deeply so your hand rises and falls. Focus on slow, deep breaths.',
    duration: 60
  },

  // Quick stretches
  {
    id: 'stretch-1',
    type: 'stretch',
    title: 'Neck Stretch',
    description: 'Tilt your head to the right, hold for 10 seconds. Then tilt to the left, hold for 10 seconds.',
    duration: 30
  },
  {
    id: 'stretch-2',
    type: 'stretch',
    title: 'Shoulder Rolls',
    description: 'Roll your shoulders forward 5 times, then backward 5 times.',
    duration: 30
  },
  {
    id: 'stretch-3',
    type: 'stretch',
    title: 'Wrist Flexion',
    description: 'Extend your arms forward, flex your wrists up and down 10 times.',
    duration: 30
  },
  {
    id: 'stretch-4',
    type: 'stretch',
    title: 'Seated Twist',
    description: 'Sitting tall, twist to the right with your hand on the back of your chair. Hold for 10 seconds, then twist to the left.',
    duration: 45
  },

  // Eye exercises
  {
    id: 'eye-1',
    type: 'eye',
    title: '20-20-20 Rule',
    description: 'Look at something 20 feet away for 20 seconds. Blink frequently.',
    duration: 30
  },
  {
    id: 'eye-2',
    type: 'eye',
    title: 'Eye Figure Eights',
    description: 'Trace a figure-8 pattern with your eyes for 30 seconds, then reverse direction.',
    duration: 60
  },
  {
    id: 'eye-3',
    type: 'eye',
    title: 'Palming Exercise',
    description: 'Rub your hands together to create warmth, then gently cup them over your closed eyes for 20 seconds.',
    duration: 30
  },

  // Motivational quotes
  {
    id: 'quote-1',
    type: 'quote',
    title: 'Inspirational Quote',
    description: '"Take a deep breath. It\'s just a bad day, not a bad life."',
  },
  {
    id: 'quote-2',
    type: 'quote',
    title: 'Inspirational Quote',
    description: '"The only way to do great work is to love what you do." - Steve Jobs',
  },
  {
    id: 'quote-3',
    type: 'quote',
    title: 'Inspirational Quote',
    description: '"Your time is limited, so don\'t waste it living someone else\'s life." - Steve Jobs',
  },
  {
    id: 'quote-4',
    type: 'quote',
    title: 'Inspirational Quote',
    description: '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
  },
  {
    id: 'quote-5',
    type: 'quote',
    title: 'Inspirational Quote',
    description: '"It always seems impossible until it\'s done." - Nelson Mandela',
  },

  // Mindful questions
  {
    id: 'mindful-1',
    type: 'mindful',
    title: 'Mindful Reflection',
    description: 'What are three things you\'re grateful for right now?',
  },
  {
    id: 'mindful-2',
    type: 'mindful',
    title: 'Mindful Reflection',
    description: 'What is one thing you\'ve accomplished today that you\'re proud of?',
  },
  {
    id: 'mindful-3',
    type: 'mindful',
    title: 'Mindful Reflection',
    description: 'How is your body feeling right now? Notice any areas of tension.',
  },
  {
    id: 'mindful-4',
    type: 'mindful',
    title: 'Mindful Reflection',
    description: 'What is one thing you\'re looking forward to after work today?',
  },
];

export const getRandomActivity = (): BreakActivity => {
  const randomIndex = Math.floor(Math.random() * breakActivities.length);
  return breakActivities[randomIndex];
};

export const getRandomActivityByType = (type: BreakType): BreakActivity => {
  const activitiesOfType = breakActivities.filter(activity => activity.type === type);
  const randomIndex = Math.floor(Math.random() * activitiesOfType.length);
  return activitiesOfType[randomIndex];
};
