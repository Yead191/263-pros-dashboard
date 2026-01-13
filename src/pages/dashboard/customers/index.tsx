import { Input, Select, Table } from 'antd';
import { Search, Eye, Lock } from 'lucide-react';
import { useState } from 'react';
import CustomerDetailsModal from './components/CustomerDetailsModal';
import { Customer, mockData } from '../../../constants/customerData';

const { Option } = Select;

export default function CustomersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const showModal = (customer: Customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'SL',
            dataIndex: 'sl',
            key: 'sl',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <div
                    className={`px-4 py-1.5 rounded-full text-center w-28 font-medium ${
                        status === 'Active' ? 'bg-[#A8D3D3] text-[#055E6E]' : 'bg-[#FFD1D1] text-[#E54B4B]'
                    }`}
                >
                    {status}
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Customer) => (
                <div className="flex gap-4 items-center">
                    <Eye
                        size={20}
                        className="text-gray-500 cursor-pointer hover:text-[#055E6E]"
                        onClick={() => showModal(record)}
                    />
                    <Lock size={20} className="text-gray-400 cursor-pointer hover:text-red-500" />
                </div>
            ),
        },
    ];

    return (
        <div className="p-6 bg-[#FEFEFE] rounded-md min-h-full">
            <div className="flex justify-end mb-4 gap-4">
                <Select
                    defaultValue="All"
                    className="w-28 px-2 "
                    size="large"
                    variant="borderless"
                    style={{ background: '#F4F4F4', borderRadius: '50px' }}
                >
                    <Option value="All">All</Option>
                    <Option value="Active">Active</Option>
                    <Option value="Inactive">Inactive</Option>
                </Select>
                <Input
                    placeholder="Search here"
                    prefix={<Search size={20} className="text-gray-400" />}
                    className="w-80 rounded-full bg-[#F4F4F4] border-none hover:bg-[#F4F4F4] focus-visible:bg-[#F4F4F4]"
                    size="large"
                />
            </div>

            <Table
                columns={columns}
                dataSource={mockData}
                pagination={{ pageSize: 8, showSizeChanger: false }}
                className="custom-table"
                rowClassName={() => 'bg-white hover:bg-gray-50'}
            />
            <CustomerDetailsModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                selectedCustomer={selectedCustomer}
            />
        </div>
    );
}
