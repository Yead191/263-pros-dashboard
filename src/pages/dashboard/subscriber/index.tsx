import { Input, Select, Table } from 'antd';
import { Search, Info, Lock, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { Subscriber, subscriberMockData } from '../../../constants/subscriberData';
import SubscriberDetailsModal from './components/SubscriberDetailsModal';

const { Option } = Select;

export default function SubscribersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);

    const showModal = (subscriber: Subscriber) => {
        setSelectedSubscriber(subscriber);
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
            title: 'Business Name',
            dataIndex: 'businessName',
            key: 'businessName',
        },
        {
            title: 'Package Type',
            dataIndex: 'packageType',
            key: 'packageType',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <div
                    className={`px-4 py-1.5 rounded-full text-center w-28 font-medium ${
                        status === 'Active' ? 'bg-[#D6F0E0] text-[#27AE60]' : 'bg-[#FFD1D1] text-[#EB5757]'
                    }`}
                >
                    {status}
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Subscriber) => (
                <div className="flex gap-4 items-center">
                    <RotateCcw size={20} className="text-gray-400 cursor-pointer hover:text-[#055E6E]" />
                    <Info
                        size={20}
                        className="text-lightBlue cursor-pointer hover:text-[#055E6E]"
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
                    className="w-28 px-2"
                    size="large"
                    variant="borderless"
                    style={{ background: '#F4F4F4', borderRadius: '50px' }}
                >
                    <Option value="All">All</Option>
                    <Option value="Active">Active</Option>
                    <Option value="Expired">Expired</Option>
                </Select>
                <Input
                    placeholder="Search here"
                    prefix={<Search size={20} className="text-gray-400" />}
                    className="w-80 rounded-full bg-[#F4F4F4] border-none"
                    size="large"
                />
            </div>

            <Table
                columns={columns}
                dataSource={subscriberMockData}
                pagination={{ pageSize: 8, showSizeChanger: false }}
                className="custom-table"
                rowClassName={() => 'bg-white hover:bg-gray-50'}
            />

            <SubscriberDetailsModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                selectedSubscriber={selectedSubscriber}
            />

            <style>{`
                .custom-table .ant-table-thead > tr > th {
                    background-color: #EBEBEB !important;
                    color: #333 !important;
                    font-weight: 600 !important;
                    border-bottom: none !important;
                }
                .custom-table .ant-table-tbody > tr > td {
                    border-bottom: 1px solid #EBEBEB !important;
                    padding: 16px 16px !important;
                }
                .custom-table {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}
