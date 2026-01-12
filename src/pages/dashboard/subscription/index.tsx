import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import AddInputForm from './AddInputForm';
import EditInputForm from './EditInputForm';
import { useDeletePackageMutation, useGetPackagesQuery } from '../../../redux/apiSlices/packageSlice';
import { subscriptionDemoData } from '../../../constants/subscriptionData';
import { toast } from 'sonner';

export interface SubscriptionType {
    _id?: string;
    name: string;
    price: number;
    features: string[];
    // New fields from API
    status: string;
    paymentId: string;
    referenceId: string;
    recurring: string;
    createdAt?: string;
    updatedAt?: string;
    perfect_for: string;
    __v?: number;
}

const SubscriptionPage = () => {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [editPackage, setEditPackage] = useState<SubscriptionType | null>(null);

    // redux api calls
    const { data: packages, refetch } = useGetPackagesQuery({});

    // Fallback to demo data if API returns nothing
    const displayPackages = packages?.data?.length > 0 ? packages.data : subscriptionDemoData;

    const [deletePackage] = useDeletePackageMutation();

    // Handle Delete
    const handleDelete = () => {
        if (!deleteId) return;
        toast.promise(deletePackage({ id: deleteId }).unwrap(), {
            loading: 'Deleting package...',
            success: (res: any) => {
                refetch();
                setShowDelete(false);
                return <b>{res.message || 'Package deleted successfully'}</b>;
            },
            error: (err: any) => {
                return <b>{err.data?.message || 'Failed to delete package'}</b>;
            },
        });
    };

    return (
        <div className=" p-6 bg-[#FEFEFE] rounded-md min-h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium text-white">Subscription Plans</h2>

                <Button
                    onClick={() => setOpenAddModal(true)}
                    style={{
                        width: 200,
                        height: 40,
                        backgroundColor: '#055E6E',
                        border: 'none',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                    }}
                >
                    <PlusOutlined />
                    Create Subscription
                </Button>
            </div>

            {/* Subscription Cards */}
            <div className="flex flex-wrap justify-start gap-10 mt-10">
                {displayPackages?.map((pkg: any) => (
                    <div
                        key={pkg._id}
                        className="max-w-[320px] w-full min-h-[420px] bg-white py-4 px-6 rounded-lg flex flex-col shadow-md border border-border"
                    >
                        {/* Delete Button */}
                        <div className="flex justify-end py-2">
                            <div
                                className="cursor-pointer bg-primary p-2 rounded-full hover:bg-[#0099A8] transition"
                                onClick={() => {
                                    setDeleteId(pkg._id);
                                    setShowDelete(true);
                                }}
                            >
                                <MdDeleteOutline className="text-xl text-white" />
                            </div>
                        </div>

                        <h4 className="text-xl font-medium text-center pb-2 text-foreground">{pkg.name}</h4>

                        {/* Price */}
                        <h4 className="text-center pb-3 text-foreground">
                            <span className="text-4xl font-semibold text-primary">${pkg.price}</span> / {pkg.recurring}
                        </h4>

                        {/* Features */}
                        <div className="space-y-3 flex-grow text-muted-foreground">
                            {pkg.features.map((feature: any, idx: number) => (
                                <div className="flex gap-2 items-start" key={idx}>
                                    <IoCheckmarkCircle className="text-primary min-w-[24px] mt-[2px]" />
                                    <p className="text-sm">{feature}</p>
                                </div>
                            ))}
                        </div>

                        {/* Edit Button */}
                        <button
                            onClick={() => {
                                setEditPackage(pkg);
                                setOpenEditModal(true);
                            }}
                            className="mt-5 h-[40px] w-full bg-primary text-white font-medium rounded-md hover:bg-[#0099A8] transition"
                        >
                            Edit Package
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Modal */}
            <Modal
                className="custom-black-modal"
                centered
                open={openAddModal}
                onCancel={() => setOpenAddModal(false)}
                width={600}
                footer={false}
            >
                <AddInputForm refetch={refetch} setOpenAddModel={setOpenAddModal} />
            </Modal>

            {/* Edit Modal */}
            <Modal
                className="custom-black-modal"
                centered
                open={openEditModal}
                onCancel={() => setOpenEditModal(false)}
                width={600}
                footer={false}
            >
                <EditInputForm refetch={refetch} setOpenEditModal={setOpenEditModal} packageData={editPackage} />
            </Modal>

            {/* Delete Modal */}
            <Modal
                className="custom-black-modal"
                centered
                open={showDelete}
                onCancel={() => setShowDelete(false)}
                footer={false}
            >
                <div className="p-6 text-center">
                    <p className="text-red-600 font-semibold text-lg">Are you sure?</p>
                    <p className="py-4 text-black/70">Do you want to delete this package?</p>
                    <button onClick={handleDelete} className="bg-primary text-white px-6 py-2 rounded-md">
                        Confirm
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default SubscriptionPage;
