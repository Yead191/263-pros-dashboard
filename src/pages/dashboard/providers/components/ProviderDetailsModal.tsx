import { Modal, Button, Avatar } from 'antd';
import { Provider } from '../../../../constants/providerData';

interface ProviderDetailsModalProps {
    provider: Provider | null;
    isOpen: boolean;
    onClose: () => void;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

const ProviderDetailsModal: React.FC<ProviderDetailsModalProps> = ({
    provider,
    isOpen,
    onClose,
    onApprove,
    onReject,
}) => {
    if (!provider) return null;

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width={700}
            centered
            className=" h-[85vh] overflow-auto !scrollbar-hidden "
        >
            <div className="p-4">
                {/* Header: Avatar and Name */}
                <div className="flex items-center gap-4 mb-6">
                    <Avatar size={64} src={provider.avatar} />
                    <h2 className="text-xl font-semibold text-gray-800">{provider.businessName}</h2>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                {/* Gallery Section */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {provider.gallery.map((img, index) => (
                        <div key={index} className="aspect-ratio-[4/3] rounded-lg overflow-hidden">
                            <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Business Info Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Business info:</h3>
                    <div className="bg-[#FEFEFE] border border-gray-50 rounded-lg p-5 space-y-4 shadow-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Business Name</span>
                            <span className="text-gray-800 font-medium">{provider.profession}</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <span className="text-gray-500">Services</span>
                            <span className="text-[#055E6E] font-medium text-right max-w-[70%]">
                                {provider?.services?.join(', ')}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Address</span>
                            <span className="text-gray-800 font-medium">{provider.address}</span>
                        </div>
                    </div>
                </div>

                {/* Others Info Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Others info:</h3>
                    <div className="bg-[#FEFEFE] border border-gray-50 rounded-lg p-5 space-y-4 shadow-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">E-mail</span>
                            <span className="text-gray-800 font-medium">{provider.email}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Mobile</span>
                            <span className="text-gray-800 font-medium">{provider.mobile}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Whatsapp</span>
                            <span className="text-[#00BCD1] font-medium">{provider.whatsapp}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Instagram</span>
                            <span className="text-[#00BCD1] font-medium cursor-pointer">Instagram</span>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-center gap-4 mt-10">
                    {provider.status === 'Pending' ? (
                        <div className="flex items-center gap-4">
                            <Button
                                onClick={() => onReject(provider.id)}
                                className="h-11 px-10 rounded-md text-red-500 border-red-500 hover:text-red-600 hover:border-red-600 font-medium"
                            >
                                Reject
                            </Button>

                            <Button
                                type="primary"
                                onClick={() => onApprove(provider.id)}
                                className="h-11 px-10 rounded-md bg-[#055E6E] hover:bg-[#044a57] border-none font-medium text-white"
                            >
                                Approve
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Button
                                onClick={() => onClose()}
                                className="h-11 px-10 rounded-md text-gray-500 border-gray-500 hover:text-gray-600 hover:border-gray-600 font-medium"
                            >
                                Close
                            </Button>
                            <Button
                                type="primary"
                                onClick={() => onClose()}
                                className="h-11 px-10 rounded-md text-white! !bg-[#FF383C] hover:!bg-[#FF383C] font-medium"
                            >
                                Suspend
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ProviderDetailsModal;
