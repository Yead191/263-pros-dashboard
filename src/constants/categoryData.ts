export interface Category {
    id: string;
    categoryName: string;
    items: number;
    status: boolean;
}

export interface Service {
    id: string;
    title: string;
    category: string;
    image: string;
}

export const categoryMockData: Category[] = [
    { id: '01', categoryName: 'Construction & Property Services', items: 50, status: true },
    { id: '02', categoryName: 'Domestic & Professional Cleaning Services', items: 50, status: true },
    { id: '03', categoryName: 'Events & Entertainment', items: 50, status: true },
    { id: '04', categoryName: 'Transport & Mobility', items: 50, status: true },
    { id: '05', categoryName: 'Hospitality & Accommodation', items: 50, status: true },
    { id: '06', categoryName: 'Health, Wellness & Personal Care', items: 50, status: true },
    { id: '07', categoryName: 'Skills, Education & Learning', items: 50, status: true },
    { id: '08', categoryName: 'Labour & Trade Services', items: 50, status: false },
];

export const serviceMockData: Service[] = [
    {
        id: '1',
        title: 'Domestic/Professional Cleaning',
        category: 'Domestic & Professional Cleaning Services',
        image: 'https://cdn.prod.website-files.com/60eece3229f951ea48ce43b4/6614dc177c4fb7a48889b609_how-to-deep-clean-your-kitchen-in-10-steps.jpg',
    },
    {
        id: '2',
        title: 'Gardening',
        category: 'Construction & Property Services',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
        id: '3',
        title: 'Post-Construction Cleaning',
        category: 'Construction & Property Services',
        image: 'https://lirp.cdn-website.com/36e11fc2bc8b45e0b1b8faa20ed3c0cf/dms3rep/multi/opt/Post-Construction-Cleaning-Services-640w.jpg',
    },
    {
        id: '4',
        title: 'Laundy & Ironing',
        category: 'Domestic & Professional Cleaning Services',
        image: 'https://images.squarespace-cdn.com/content/v1/5a8f93f250a54f2f3ad5d924/1571268384248-50UB8QIUNT3FM2L84VFX/AdobeStock_136901389.jpeg',
    },
];
