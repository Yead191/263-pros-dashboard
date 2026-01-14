import { useState } from 'react';
import { Table, Input, Select, Space, message } from 'antd';
import { Search } from 'lucide-react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { helpSupportMockData, SupportRequest } from '../../../constants/helpSupportData';
import SupportDetailsModal from './components/SupportDetailsModal';

export default function HelpSupport() {
    const [searchText, setSearchText] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState<SupportRequest | null>(null);
    const [requests, setRequests] = useState(helpSupportMockData);

    const handleViewDetails = (request: SupportRequest) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };

    const handleReply = (id: string, reply: string) => {
        console.log(`Replying to ${id} with: ${reply}`);
        message.success('Reply sent successfully');
        setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: 'Replied' as const } : r)));
        setIsModalOpen(false);
    };

    const filteredData = requests.filter((item) => {
        const matchesSearch =
            item.userName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.email.toLowerCase().includes(searchText.toLowerCase()) ||
            item.issue.toLowerCase().includes(searchText.toLowerCase());
        const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const columns = [
        {
            title: 'SL',
            dataIndex: 'id',
            key: 'id',
            width: 80,
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Issue',
            dataIndex: 'issue',
            key: 'issue',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: SupportRequest) => (
                <Space size="middle">
                    <button
                        onClick={() => handleViewDetails(record)}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <MdOutlineRemoveRedEye size={22} className="text-gray-500" />
                    </button>
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${
                            record.status === 'Replied'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-orange-100 text-orange-600'
                        }`}
                    >
                        {record.status}
                    </span>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-6 bg-[#FEFEFE] rounded-md min-h-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
                <div className="flex gap-4">
                    <Select
                        defaultValue="All"
                        style={{ width: 120 }}
                        onChange={(value) => setStatusFilter(value)}
                        className="h-10"
                        options={[
                            { value: 'All', label: 'All' },
                            { value: 'Pending', label: 'Pending' },
                            { value: 'Replied', label: 'Replied' },
                        ]}
                    />
                    <Input
                        placeholder="Search here"
                        prefix={<Search size={18} className="text-gray-400 mr-2" />}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-72 h-10 rounded-full bg-[#F3F3F3] border-none"
                    />
                </div>
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={{
                    pageSize: 8,
                    position: ['bottomRight'],
                    showSizeChanger: false,
                    className: 'custom-pagination',
                }}
                rowKey="id"
                className="custom-table"
            />

            <SupportDetailsModal
                request={selectedRequest}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onReply={handleReply}
            />
        </div>
    );
}
