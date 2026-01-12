import { Input, Select, Table, Rate } from 'antd';
import { Search, Eye, Lock } from 'lucide-react';
import { useState } from 'react';
import { Review, reviewMockData } from '../../../constants/reviewData';
import ReviewDetailsModal from './components/ReviewDetailsModal';

const { Option } = Select;

export default function ReviewsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    const showModal = (review: Review) => {
        setSelectedReview(review);
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ratings',
            dataIndex: 'ratings',
            key: 'ratings',
            render: (ratings: number) => <Rate disabled defaultValue={ratings} className="text-yellow-400 text-sm" />,
        },
        {
            title: 'Reviews',
            dataIndex: 'review',
            key: 'review',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    className="w-28 status-select"
                    variant="borderless"
                    dropdownStyle={{ borderRadius: '8px' }}
                    style={{
                        backgroundColor: status === 'Active' ? '#D6F0E0' : '#FFD1D1',
                        color: status === 'Active' ? '#27AE60' : '#EB5757',
                        borderRadius: '50px',
                        textAlign: 'center',
                    }}
                >
                    <Option value="Active">Active</Option>
                    <Option value="Inactive">Inactive</Option>
                </Select>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Review) => (
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
                    className="w-28 px-2"
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
                    className="w-80 rounded-full bg-[#F4F4F4] border-none"
                    size="large"
                />
            </div>

            <Table
                columns={columns}
                dataSource={reviewMockData}
                pagination={{ pageSize: 8, showSizeChanger: false }}
                className="custom-table"
                rowClassName={() => 'bg-white hover:bg-gray-50'}
            />

            <ReviewDetailsModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                selectedReview={selectedReview}
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
                .status-select .ant-select-selector {
                    padding: 0 12px !important;
                    height: 32px !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .status-select .ant-select-selection-item {
                    font-weight: 500 !important;
                    line-height: 32px !important;
                }
            `}</style>
        </div>
    );
}
