import { useState } from 'react';
import { Table, Input, Select, Space } from 'antd';
import { Search } from 'lucide-react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import { providerMockData, Provider } from '../../../constants/providerData';
import ProviderDetailsModal from './components/ProviderDetailsModal';

export default function ProvidersPage() {
    const [searchText, setSearchText] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
    const [providers, setProviders] = useState(providerMockData);

    const handleViewDetails = (provider: Provider) => {
        setSelectedProvider(provider);
        setIsModalOpen(true);
    };

    const handleApprove = (id: string) => {
        setProviders((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'Verified' as const } : p)));
        setIsModalOpen(false);
    };

    const handleReject = (id: string) => {
        setProviders((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'Rejected' as const } : p)));
        setIsModalOpen(false);
    };

    const filteredData = providers.filter((item) => {
        const matchesSearch =
            item.businessName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.email.toLowerCase().includes(searchText.toLowerCase());
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
            title: 'Business Name',
            dataIndex: 'businessName',
            key: 'businessName',
        },
        {
            title: 'Profession',
            dataIndex: 'profession',
            key: 'profession',
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
            render: (status: string) => {
                let color = '';
                let bgColor = '';
                let borderColor = '';

                if (status === 'Verified') {
                    color = '#52C41A';
                    bgColor = '#F6FFED';
                    borderColor = '#B7EB8F';
                } else if (status === 'Pending') {
                    color = '#FA8C16';
                    bgColor = '#FFF7E6';
                    borderColor = '#FFD591';
                } else if (status === 'Rejected') {
                    color = '#F5222D';
                    bgColor = '#FFF1F0';
                    borderColor = '#FFA39E';
                }

                return (
                    <span
                        className="px-4 py-1.5 rounded-full text-sm font-medium border"
                        style={{ color, backgroundColor: bgColor, borderColor }}
                    >
                        {status}
                    </span>
                );
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Provider) => (
                <Space size="middle">
                    <button
                        onClick={() => handleViewDetails(record)}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <MdOutlineRemoveRedEye size={20} className="text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                        <FiLock size={18} className="text-gray-400" />
                    </button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-6 bg-[#FEFEFE] rounded-md min-h-full">
            {/* Header Actions */}
            <div className="flex justify-end gap-4 mb-6">
                <Select
                    defaultValue="All"
                    style={{ width: 120 }}
                    onChange={(value) => setStatusFilter(value)}
                    className="h-10 "
                    options={[
                        { value: 'All', label: 'All' },
                        { value: 'Verified', label: 'Verified' },
                        { value: 'Pending', label: 'Pending' },
                        { value: 'Rejected', label: 'Rejected' },
                    ]}
                />
                <Input
                    placeholder="Search here"
                    prefix={<Search size={18} className="text-gray-400 mr-2" />}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-72 h-10 rounded-full bg-[#F3F3F3] border-none"
                />
            </div>

            {/* Table */}
            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={{
                    pageSize: 8,
                    position: ['bottomRight'],
                    showSizeChanger: false,
                }}
                rowKey="id"
                className="custom-table"
            />

            {/* Details Modal */}
            <ProviderDetailsModal
                provider={selectedProvider}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onApprove={handleApprove}
                onReject={handleReject}
            />
        </div>
    );
}
