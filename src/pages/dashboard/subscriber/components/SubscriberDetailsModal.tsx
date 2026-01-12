import { Modal } from 'antd';

export default function SubscriberDetailsModal({
    isModalOpen,
    handleOk,
    handleCancel,
    selectedSubscriber,
}: {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    selectedSubscriber: any;
}) {
    return (
        <Modal
            title={<h2 className="text-xl font-semibold border-b pb-2">Subscriber Details</h2>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered
            width={600}
        >
            {selectedSubscriber && (
                <div className="py-4 space-y-4 text-lg">
                    <div className="grid grid-cols-2 gap-y-6">
                        <div>
                            <p className="text-gray-500 text-sm">Business Name</p>
                            <p className="font-medium">{selectedSubscriber.businessName}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Package Type</p>
                            <p className="font-medium text-[#055E6E]">{selectedSubscriber.packageType}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Start Date</p>
                            <p className="font-medium">{selectedSubscriber.startDate}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">End Date</p>
                            <p className="font-medium">{selectedSubscriber.endDate}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Price</p>
                            <p className="font-medium">{selectedSubscriber.price}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Status</p>
                            <span
                                className={`px-4 py-1 rounded-full text-sm font-medium ${
                                    selectedSubscriber.status === 'Active'
                                        ? 'bg-[#D6F0E0] text-[#27AE60]'
                                        : 'bg-[#FFD1D1] text-[#EB5757]'
                                }`}
                            >
                                {selectedSubscriber.status}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}
