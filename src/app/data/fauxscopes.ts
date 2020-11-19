import { IScope } from '../models/iscope';

const fauxscopes: IScope[] = [
    {
        sign: 'Aries',
        signImageUrl: 'assets/Aries.svg',
        meaning: 'The Ram',
        astrologicalStartDay: 21,
        astrologicalStartMonth: 3,
        astrologicalEndDay: 20,
        astrologicalEndMonth: 4,
        astronomicalStartDay: 19,
        astronomicalStartMonth: 4,
        astronomicalEndDay: 14,
        astronomicalEndMonth: 5,
        duration: 25
    },
    {
        sign: 'Taurus',
        signImageUrl: 'assets/Taurus.svg',
        meaning: 'The Bull',
        astrologicalStartDay: 21,
        astrologicalStartMonth: 4,
        astrologicalEndDay: 21,
        astrologicalEndMonth: 5,
        astronomicalStartDay: 15,
        astronomicalStartMonth: 5,
        astronomicalEndDay: 21,
        astronomicalEndMonth: 6,
        duration: 38
    },
];

export { fauxscopes };
