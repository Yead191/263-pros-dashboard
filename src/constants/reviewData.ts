export interface Review {
    key: string;
    sl: string;
    businessName: string;
    email: string;
    ratings: number;
    review: string;
    status: 'Active' | 'Inactive';
}

export const reviewMockData: Review[] = [
    {
        key: '1',
        sl: '01',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For Testing Purpose.',
        status: 'Active',
    },
    {
        key: '2',
        sl: '02',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Active',
    },
    {
        key: '3',
        sl: '03',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Active',
    },
    {
        key: '4',
        sl: '04',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Active',
    },
    {
        key: '5',
        sl: '05',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Active',
    },
    {
        key: '6',
        sl: '06',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Active',
    },
    {
        key: '7',
        sl: '07',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Active',
    },
    {
        key: '8',
        sl: '08',
        businessName: 'Leslie Alexander',
        email: 'User@Gmail.Com',
        ratings: 5,
        review: 'I Have Used 263 Pros Twice Now For...',
        status: 'Inactive',
    },
];
