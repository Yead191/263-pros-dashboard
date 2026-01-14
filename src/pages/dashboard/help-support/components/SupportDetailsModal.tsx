import { Modal, Input, Button, Form } from 'antd';
import { SupportRequest } from '../../../../constants/helpSupportData';

const { TextArea } = Input;

interface SupportDetailsModalProps {
    request: SupportRequest | null;
    isOpen: boolean;
    onClose: () => void;
    onReply: (id: string, reply: string) => void;
}

export default function SupportDetailsModal({ request, isOpen, onClose, onReply }: SupportDetailsModalProps) {
    const [form] = Form.useForm();

    const handleSubmit = (values: { reply: string }) => {
        if (request) {
            onReply(request.id, values.reply);
            form.resetFields();
        }
    };

    if (!request) return null;

    return (
        <Modal
            title={<h2 className="text-xl font-semibold">Support Request Details</h2>}
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width={600}
            centered
        >
            <div className="space-y-6 py-4">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">User Name</p>
                        <p className="font-medium">{request.userName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="font-medium">{request.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Date</p>
                        <p className="font-medium">{request.date}</p>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-500 mb-1">Issue</p>
                    <p className="font-medium">{request.issue}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500 mb-1">Full Message</p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{request.message}</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-semibold mb-3">Reply to User</h3>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item name="reply" rules={[{ required: true, message: 'Please enter your reply' }]}>
                            <TextArea rows={4} placeholder="Type your reply here..." className="rounded-lg" />
                        </Form.Item>
                        <div className="flex justify-end gap-3">
                            <Button onClick={onClose} className="rounded-md px-6 h-12!">
                                Cancel
                            </Button>
                            <Button type="primary" htmlType="submit" className="bg-primary rounded-md px-8 h-12!">
                                Send Reply
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    );
}
