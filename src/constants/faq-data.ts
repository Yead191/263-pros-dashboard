export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export const faqData: FAQ[] = [
    {
        id: '1',
        question: 'How do I create a new subscription plan?',
        answer: "To create a new subscription plan, navigate to the Subscriptions page and click the 'Create Subscription' button. Fill in the required details like name, price, and features, and click submit.",
    },
    {
        id: '2',
        question: "Can I edit an existing customer's profile?",
        answer: 'Yes, you can edit customer profiles by clicking the edit icon next to the customer in the Customer Management table. Note that some fields like username might be restricted.',
    },
    {
        id: '3',
        question: 'How are payments processed?',
        answer: 'Payments are processed through our integrated payment gateway. You can view transaction details and payment statuses in the Payment section of the dashboard.',
    },
    {
        id: '4',
        question: 'What is the difference between a Subscriber and a Customer?',
        answer: 'A customer is any user registered on the platform, while a subscriber is a customer who has an active paid subscription plan.',
    },
    {
        id: '5',
        question: 'How can I deactivate a service provider?',
        answer: 'Service providers can be deactivated from the Providers management page. Deactivating a provider will hide their listings from the public view.',
    },
    {
        id: '6',
        question: 'Is there a limit to how many FAQs I can add?',
        answer: 'No, there is no hard limit on the number of FAQs. However, we recommend keeping them concise and well-organized for better user experience.',
    },
    {
        id: '7',
        question: 'How do I respond to user reviews?',
        answer: "You can view and manage reviews in the Reviews section. Click on the 'View' icon to see the full review text and use the actions menu to respond or flag if necessary.",
    },
    {
        id: '8',
        question: 'Can I export the subscriber list?',
        answer: 'Currently, you can view the subscriber list in the dashboard. Export functionality to CSV/Excel is planned for a future update.',
    },
];
