import { BsGrid, BsPatchQuestion } from 'react-icons/bs';
import { TSidebarItem } from './generateSidebarItems';
import { LuClipboardList } from 'react-icons/lu';
import { Crown, Star, Users2 } from 'lucide-react';
import { FaUsersGear } from 'react-icons/fa6';
import { MdOutlineInsertChart } from 'react-icons/md';
import { IoIosInformationCircle } from 'react-icons/io';

const sidebarItems: TSidebarItem[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '',
        icon: <BsGrid size={22} />,
    },
    {
        key: 'customers',
        label: 'Customer Management',
        path: 'customer-management',
        icon: <Users2 size={22} />,
    },

    {
        key: 'providers',
        label: 'Provider Management',
        path: 'provider-management',
        icon: <FaUsersGear size={22} />,
    },
    {
        key: 'reviews',
        label: 'Reviews',
        path: 'reviews',
        icon: <Star size={22} />,
    },
    {
        key: 'subscribers',
        label: 'Subscribers',
        path: 'subscribers',
        icon: <Crown size={22} />,
    },
    {
        key: 'subscriptions',
        label: 'Subscriptions',
        path: 'subscriptions',
        icon: <MdOutlineInsertChart size={22} />,
    },
    {
        key: 'settings',
        label: 'Settings',
        path: 'settings',
        icon: '/icons/setting.png',
        children: [
            {
                key: 'about',
                label: 'About Us',
                path: 'about',
                icon: <IoIosInformationCircle size={22} />,
            },
            {
                key: 'terms-and-condition',
                label: 'Terms and Condition',
                path: 'terms-and-condition',
                icon: <LuClipboardList size={22} />,
            },
            {
                key: 'privacy-policy',
                label: 'Privacy Policy',
                path: 'privacy-policy',
                icon: <LuClipboardList size={22} />,
            },
            {
                key: 'faq',
                label: 'FAQ',
                path: 'faq',
                icon: <BsPatchQuestion size={22} />,
            },
        ],
    },
];

export default sidebarItems;
