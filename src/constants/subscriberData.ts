export interface Subscriber {
    key: string;
    sl: string;
    businessName: string;
    packageType: string;
    startDate: string;
    endDate: string;
    price: string;
    status: 'Active' | 'Expired';
}

export const subscriberMockData: Subscriber[] = [
    {
        key: '1',
        sl: '01',
        businessName: 'Leslie Alexander',
        packageType: 'Standard Plan',
        startDate: '01/01/2026',
        endDate: '31/01/2026',
        price: '$40.00',
        status: 'Active',
    },
    {
        key: '2',
        sl: '02',
        businessName: 'Leslie Alexander',
        packageType: 'Premium Plan',
        startDate: '01/01/2026',
        endDate: '31/01/2026',
        price: '$40.00',
        status: 'Active',
    },
    {
        key: '3',
        sl: '03',
        businessName: 'Leslie Alexander',
        packageType: 'Starter Plan',
        startDate: '01/01/2026',
        endDate: '31/01/2026',
        price: '$40.00',
        status: 'Expired',
    },
];
