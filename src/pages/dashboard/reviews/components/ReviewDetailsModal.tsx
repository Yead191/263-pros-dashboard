import { Modal, Rate } from 'antd';

export default function ReviewDetailsModal({
    isModalOpen,
    handleOk,
    handleCancel,
    selectedReview,
}: {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    selectedReview: any;
}) {
    return (
        <Modal
            title={<h2 className="text-xl font-semibold border-b pb-2">Review Details</h2>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered
            width={600}
        >
            {selectedReview && (
                <div className="py-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-500 text-sm">Business Name</p>
                            <p className="font-medium text-lg">{selectedReview.businessName}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Email</p>
                            <p className="font-medium">{selectedReview.email}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Ratings</p>
                            <Rate disabled defaultValue={selectedReview.ratings} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Status</p>
                            <p className="font-medium">{selectedReview.status}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm mb-1">Full Review</p>
                        <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                            {selectedReview.review}
                        </p>
                    </div>
                </div>
            )}
        </Modal>
    );
}
