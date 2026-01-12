import { Modal } from 'antd';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function CustomerDetailsModal({
    isModalOpen,
    handleOk,
    handleCancel,
    selectedCustomer,
}: {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    selectedCustomer: any;
}) {
    return (
        <Modal
            title={null}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            closeIcon={null}
            width={500}
            centered
        >
            {selectedCustomer && (
                <div className="p-2">
                    <div className="flex items-center gap-4 border-b pb-4 mb-6">
                        <img
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            alt="Avatar"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800">{selectedCustomer.userName}</h2>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-medium text-gray-700">Personal info:</h3>

                        <div className="flex items-center gap-4">
                            <Mail size={24} className="text-gray-400" />
                            <span className="text-lg text-gray-600 font-normal">{selectedCustomer.email}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone size={24} className="text-gray-400" />
                            <span className="text-lg text-gray-600 font-normal">+{selectedCustomer.contact}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <MapPin size={24} className="text-gray-400" />
                            <span className="text-lg text-gray-600 font-normal">{selectedCustomer.location}</span>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}
