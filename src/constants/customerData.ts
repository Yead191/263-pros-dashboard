export interface Customer {
    key: string;
    sl: string;
    userName: string;
    contact: string;
    email: string;
    location: string;
    status: 'Active' | 'Inactive';
}

export const mockData: Customer[] = [
    {
        key: '1',
        sl: '01',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '2',
        sl: '02',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '3',
        sl: '03',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '4',
        sl: '04',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '5',
        sl: '05',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '6',
        sl: '06',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '7',
        sl: '07',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Active',
    },
    {
        key: '8',
        sl: '08',
        userName: 'Leslie Alexander',
        contact: '12345678910',
        email: 'User@Gmail.Com',
        location: 'Royal Ln Mesa, New Jersey',
        status: 'Inactive',
    },
];
