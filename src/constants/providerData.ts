export interface Provider {
    id: string;
    businessName: string;
    profession: string;
    email: string;
    location: string;
    status: 'Verified' | 'Pending' | 'Rejected';
    avatar: string;
    gallery: string[];
    mobile: string;
    whatsapp: string;
    instagram: string;
    address: string;
    services: string[];
}

export const providerMockData: Provider[] = [
    {
        id: '01',
        businessName: 'Leslie Alexander',
        profession: 'Domestic Cleaning',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Verified',
        avatar: 'https://i.pravatar.cc/150?u=01',
        gallery: [
            'https://picsum.photos/400/300?random=1',
            'https://picsum.photos/400/300?random=2',
            'https://picsum.photos/400/300?random=3',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_alex',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Domestic Cleaning', 'Deep Cleaning', 'Office Cleaning'],
    },
    {
        id: '02',
        businessName: 'Leslie Alexander',
        profession: 'Pool Cleaning',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Verified',
        avatar: 'https://i.pravatar.cc/150?u=02',
        gallery: [
            'https://picsum.photos/400/300?random=4',
            'https://picsum.photos/400/300?random=5',
            'https://picsum.photos/400/300?random=6',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_pool',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Pool Cleaning', 'Maintenance', 'Water Testing'],
    },
    {
        id: '03',
        businessName: 'Leslie Alexander',
        profession: 'Accountant',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/150?u=03',
        gallery: [
            'https://picsum.photos/400/300?random=7',
            'https://picsum.photos/400/300?random=8',
            'https://picsum.photos/400/300?random=9',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_finance',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Tax Prep', 'Bookkeeping', 'Financial Planning'],
    },
    {
        id: '04',
        businessName: 'Leslie Alexander',
        profession: 'Plumbing',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/150?u=04',
        gallery: [
            'https://picsum.photos/400/300?random=10',
            'https://picsum.photos/400/300?random=11',
            'https://picsum.photos/400/300?random=12',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_plumb',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Pipe Repair', 'Drain Cleaning', 'Installation'],
    },
    {
        id: '05',
        businessName: 'Leslie Alexander',
        profession: 'Message Therapy',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/150?u=05',
        gallery: [
            'https://picsum.photos/400/300?random=13',
            'https://picsum.photos/400/300?random=14',
            'https://picsum.photos/400/300?random=15',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_therapy',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Swedish Massage', 'Deep Tissue', 'Sports Massage'],
    },
    {
        id: '06',
        businessName: 'Leslie Alexander',
        profession: 'Makeup Artist',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/150?u=06',
        gallery: [
            'https://picsum.photos/400/300?random=16',
            'https://picsum.photos/400/300?random=17',
            'https://picsum.photos/400/300?random=18',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_makeup',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Bridal Makeup', 'Event Makeup', 'Tutorials'],
    },
    {
        id: '07',
        businessName: 'Leslie Alexander',
        profession: 'Photographer',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/150?u=07',
        gallery: [
            'https://picsum.photos/400/300?random=19',
            'https://picsum.photos/400/300?random=20',
            'https://picsum.photos/400/300?random=21',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_photo',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Portrait', 'Event', 'Commercial'],
    },
    {
        id: '08',
        businessName: 'Leslie Alexander',
        profession: 'Wedding Planner',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Rejected',
        avatar: 'https://i.pravatar.cc/150?u=08',
        gallery: [
            'https://picsum.photos/400/300?random=22',
            'https://picsum.photos/400/300?random=23',
            'https://picsum.photos/400/300?random=24',
        ],
        mobile: '+99123456789',
        whatsapp: '+99123456789',
        instagram: 'leslie_wedding',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        services: ['Wedding Planning', 'Coordination', 'Design'],
    },
];
