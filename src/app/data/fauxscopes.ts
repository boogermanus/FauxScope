import { IScope } from '../models/iscope';

const fauxscopes: IScope[] = [
    {
        sign: 'Aries',
        signImageUrl: 'assets/Aries.svg',
        meaning: 'The Ram',
        astrologicalStartDay: 21,
        astrologicalStartMonth: 2,
        astrologicalEndDay: 20,
        astrologicalEndMonth: 3,
        astronomicalStartDay: 19,
        astronomicalStartMonth: 3,
        astronomicalEndDay: 14,
        astronomicalEndMonth: 4,
        duration: 38
    },
    {
        sign: 'Taurus',
        signImageUrl: 'assets/Taurus.svg',
        meaning: 'The Bull',
        astrologicalStartDay: 21,
        astrologicalStartMonth: 3,
        astrologicalEndDay: 21,
        astrologicalEndMonth: 4,
        astronomicalStartDay: 15,
        astronomicalStartMonth: 3,
        astronomicalEndDay: 21,
        astronomicalEndMonth: 5,
        duration: 25
    },
    {
        sign: 'Gemini',
        signImageUrl: 'assets/Gemini.svg',
        meaning: 'The Twins',
        astrologicalStartDay: 22,
        astrologicalStartMonth: 4,
        astrologicalEndDay: 21,
        astrologicalEndMonth: 5,
        astronomicalStartDay: 22,
        astronomicalStartMonth: 5,
        astronomicalEndDay: 20,
        astronomicalEndMonth: 6,
        duration: 30
    }
];

export { fauxscopes };
