import {
  GiWeightLiftingUp,
  GiRun,
  GiFireDash,
  GiCentaurHeart
} from 'react-icons/gi'

const keyGen = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export default [
  {
    id: keyGen(),
    Icon: GiWeightLiftingUp,
    heading: 'Strength Training',
    details:
      'In this program, you are trained to improve your strength through many exercises.'
  },
  {
    id: keyGen(),
    Icon: GiRun,
    heading: 'Cardio Training',
    details:
      'In this program, you are trained to do sequential moves in range of 20 until 30 minutes.'
  },
  {
    id: keyGen(),
    Icon: GiFireDash,
    heading: 'Fat Burning',
    details:
      'This program is suitable for you who wants to get rid of your fat and lose their weight.'
  },
  {
    id: keyGen(),
    Icon: GiCentaurHeart,
    heading: 'Health Fitness',
    details:
      'This programs is designed for those who exercises only for their body fitness not body building.'
  }
]
