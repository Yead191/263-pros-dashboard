import { useState } from 'react';
import { Table, Switch, Space, Input, Select, Button } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { categoryMockData, serviceMockData, Category, Service } from '../../../constants/categoryData';
import AddEditCategoryModal from './components/AddEditCategoryModal';
import AddEditServiceModal from './components/AddEditServiceModal';
import Swal from 'sweetalert2';
import { Edit, Trash } from 'lucide-react';

export default function CategoryPage() {
    const [activeTab, setActiveTab] = useState<'categories' | 'services'>('categories');
    const [categories, setCategories] = useState<Category[]>(categoryMockData);
    const [services, setServices] = useState<Service[]>(serviceMockData);

    // Category State
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);

    // Service State
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [searchText, setSearchText] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    // Category Handlers
    const handleAddCategory = () => {
        setEditingCategory(null);
        setIsCategoryModalOpen(true);
    };

    const handleEditCategory = (category: Category) => {
        setEditingCategory(category);
        setIsCategoryModalOpen(true);
    };

    const handleSaveCategory = (values: any) => {
        if (editingCategory) {
            setCategories((prev) => prev.map((c) => (c.id === editingCategory.id ? { ...c, ...values } : c)));
        } else {
            const newCategory = {
                id: (categories.length + 1).toString().padStart(2, '0'),
                categoryName: values.categoryName,
                items: 0,
                status: values.status,
            };
            setCategories((prev) => [...prev, newCategory]);
        }
        setIsCategoryModalOpen(false);
    };

    const handleDeleteCategory = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#055E6E',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                setCategories((prev) => prev.filter((c) => c.id !== id));
                Swal.fire('Deleted!', 'Category has been deleted.', 'success');
            }
        });
    };

    // Service Handlers
    const handleAddService = () => {
        setEditingService(null);
        setIsServiceModalOpen(true);
    };

    const handleEditService = (service: Service) => {
        setEditingService(service);
        setIsServiceModalOpen(true);
    };

    const handleSaveService = (values: any) => {
        if (editingService) {
            setServices((prev) => prev.map((s) => (s.id === editingService.id ? { ...s, ...values } : s)));
        } else {
            const newService = {
                id: (services.length + 1).toString(),
                ...values,
            };
            setServices((prev) => [...prev, newService]);
        }
        setIsServiceModalOpen(false);
    };

    const filteredServices = services.filter((s) => {
        const matchesSearch = s.title.toLowerCase().includes(searchText.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || s.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const categoryColumns = [
        {
            title: 'SL',
            dataIndex: 'id',
            key: 'id',
            width: 80,
            align: 'center' as const,
        },
        {
            title: 'Category Name',
            dataIndex: 'categoryName',
            key: 'categoryName',
            width: '40%',
            align: 'center' as const,
        },
        {
            title: 'Items',
            dataIndex: 'items',
            key: 'items',
            align: 'center' as const,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center' as const,
            render: (status: boolean, record: Category) => (
                <Switch
                    checked={status}
                    onChange={(checked) => {
                        setCategories((prev) => prev.map((c) => (c.id === record.id ? { ...c, status: checked } : c)));
                    }}
                    className={status ? 'bg-green-500' : 'bg-red-500'}
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center' as const,
            render: (_: any, record: Category) => (
                <Space size="middle">
                    {/* <EyeOutlined className="text-gray-400 cursor-pointer" /> */}
                    <Edit
                        size={24}
                        onClick={() => handleEditCategory(record)}
                        className="text-gray-400 cursor-pointer hover:text-blue-500 "
                    />
                    <Trash
                        size={24}
                        onClick={() => handleDeleteCategory(record.id)}
                        className="text-gray-400 cursor-pointer hover:text-red-500 "
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg min-h-full">
            {/* Tabs & Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex bg-[#F3F3F3] p-1 rounded-full w-fit">
                    <button
                        onClick={() => setActiveTab('categories')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeTab === 'categories' ? 'bg-[#055E6E] text-white' : 'text-gray-500'
                        }`}
                    >
                        Categories
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeTab === 'services' ? 'bg-[#055E6E] text-white' : 'text-gray-500'
                        }`}
                    >
                        Services
                    </button>
                </div>

                {activeTab === 'categories' ? (
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleAddCategory}
                        className="h-10 bg-[#055E6E] hover:bg-[#044a57] border-none rounded-full px-6 flex items-center"
                    >
                        Add Categories
                    </Button>
                ) : (
                    <div className="flex gap-4">
                        <Select
                            defaultValue="All"
                            style={{ width: 120 }}
                            onChange={setCategoryFilter}
                            className="h-10 border-none bg-[#F3F3F3] rounded-full custom-select"
                            options={[
                                { value: 'All', label: 'All' },
                                ...categories.map((c) => ({ value: c.categoryName, label: c.categoryName })),
                            ]}
                        />
                        <Input
                            placeholder="Search here"
                            prefix={<SearchOutlined className="text-gray-400" />}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="h-10 w-64 bg-[#F3F3F3] border-none rounded-full"
                        />
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={handleAddService}
                            className="h-10 bg-[#055E6E] hover:bg-[#044a57] border-none rounded-full px-6 flex items-center"
                        >
                            Add New
                        </Button>
                    </div>
                )}
            </div>

            {/* Content Area */}
            {activeTab === 'categories' ? (
                <Table
                    columns={categoryColumns}
                    dataSource={categories}
                    pagination={{ pageSize: 8, position: ['bottomRight'] }}
                    rowKey="id"
                    className="custom-table"
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-gray-800 font-medium mb-4 h-12 flex items-center">
                                    {service.title}
                                </h3>
                                <Button
                                    onClick={() => handleEditService(service)}
                                    className="w-full h-10 border-[#055E6E] text-[#055E6E] font-medium hover:bg-[#055E6E] hover:text-white"
                                >
                                    Edit
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modals */}
            <AddEditCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
                onSave={handleSaveCategory}
                editingCategory={editingCategory}
            />
            <AddEditServiceModal
                isOpen={isServiceModalOpen}
                onClose={() => setIsServiceModalOpen(false)}
                onSave={handleSaveService}
                editingService={editingService}
            />

            <style>{`
                .custom-table .ant-table-thead > tr > th {
                    background-color: #F3F3F3 !important;
                    font-weight: 600;
                    color: #1a1a1a;
                }
                .ant-switch-checked {
                    background-color: #52C41A !important;
                }
                .ant-switch:not(.ant-switch-checked) {
                    background-color: #F5222D !important;
                }
                .custom-select .ant-select-selector {
                    border-radius: 9999px !important;
                    background-color: #F3F3F3 !important;
                    border: none !important;
                    height: 40px !important;
                    display: flex;
                    align-items: center;
                }
                .ant-pagination-item-active {
                    background-color: #055E6E !important;
                    border-color: #055E6E !important;
                }
                .ant-pagination-item-active a {
                    color: white !important;
                }
            `}</style>
        </div>
    );
}
