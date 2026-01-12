export interface SubscriptionType {
    _id?: string;
    name: string;
    price: number;
    features: string[];
    status: string;
    paymentId: string;
    referenceId: string;
    recurring: string;
    perfect_for: string;
}

export const subscriptionDemoData: SubscriptionType[] = [
    {
        _id: '1',
        name: 'Starter Plan',
        price: 0,
        recurring: 'monthly',
        features: ['List up to 01 Service', 'Basic Support', 'Email Notifications'],
        status: 'active',
        paymentId: 'price_starter_free',
        referenceId: 'REF-STARTER-001',
        perfect_for: 'Individual users starting out',
    },
    {
        _id: '2',
        name: 'Standard Plan',
        price: 10,
        recurring: 'monthly',
        features: ['List up to 10 Services', 'Priority Support', 'Advanced Analytics', 'Multi-user Access'],
        status: 'active',
        paymentId: 'price_standard_10',
        referenceId: 'REF-STANDARD-010',
        perfect_for: 'Small businesses and teams',
    },
    {
        _id: '3',
        name: 'Premium Plan',
        price: 40,
        recurring: 'monthly',
        features: [
            'Unlimited Services',
            '24/7 Dedicated Support',
            'Full Analytics Suite',
            'Custom Branding',
            'API Access',
        ],
        status: 'active',
        paymentId: 'price_premium_40',
        referenceId: 'REF-PREMIUM-040',
        perfect_for: 'Large enterprises and scale',
    },
];
