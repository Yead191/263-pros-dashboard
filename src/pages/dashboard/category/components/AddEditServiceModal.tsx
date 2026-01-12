import { Modal, Form, Input, Select, Button, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Service, categoryMockData } from '../../../../constants/categoryData';

interface AddEditServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (values: any) => void;
    editingService: Service | null;
}

const AddEditServiceModal: React.FC<AddEditServiceModalProps> = ({ isOpen, onClose, onSave, editingService }) => {
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (editingService) {
            form.setFieldsValue(editingService);
            setImageUrl(editingService.image);
        } else {
            form.resetFields();
            setImageUrl(null);
        }
    }, [editingService, isOpen, form]);

    const handleFinish = (values: any) => {
        onSave({ ...values, image: imageUrl });
        form.resetFields();
    };

    const beforeUpload = (file: File) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }

        // Simulate upload
        const reader = new FileReader();
        reader.addEventListener('load', () => setImageUrl(reader.result as string));
        reader.readAsDataURL(file);

        return false;
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload Image</div>
        </div>
    );

    return (
        <Modal
            title={editingService ? 'Edit Service' : 'Add Service'}
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            width={500}
        >
            <Form form={form} layout="vertical" onFinish={handleFinish} className="mt-4">
                <div className="flex justify-center mb-6">
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="service"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </div>

                <Form.Item
                    name="title"
                    label="Service Title"
                    rules={[{ required: true, message: 'Please enter service title' }]}
                >
                    <Input placeholder="Enter service title" className="h-10" />
                </Form.Item>

                <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true, message: 'Please select a category' }]}
                >
                    <Select placeholder="Select category" className="h-10">
                        {categoryMockData.map((cat) => (
                            <Select.Option key={cat.id} value={cat.categoryName}>
                                {cat.categoryName}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <div className="flex justify-end gap-3 mt-8">
                    <Button onClick={onClose} className="h-10 px-6">
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="h-10 px-6 bg-[#055E6E] hover:bg-[#044a57] border-none"
                    >
                        {editingService ? 'Update' : 'Add'}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddEditServiceModal;
