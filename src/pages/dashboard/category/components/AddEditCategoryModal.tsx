import { Modal, Form, Input, Switch, Button } from 'antd';
import { useEffect } from 'react';
import { Category } from '../../../../constants/categoryData';

interface AddEditCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (values: any) => void;
    editingCategory: Category | null;
}

const AddEditCategoryModal: React.FC<AddEditCategoryModalProps> = ({ isOpen, onClose, onSave, editingCategory }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (editingCategory) {
            form.setFieldsValue(editingCategory);
        } else {
            form.resetFields();
            form.setFieldsValue({ status: true });
        }
    }, [editingCategory, isOpen, form]);

    const handleFinish = (values: any) => {
        onSave(values);
        form.resetFields();
    };

    return (
        <Modal
            title={editingCategory ? 'Edit Category' : 'Add Category'}
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
        >
            <Form form={form} layout="vertical" onFinish={handleFinish} className="mt-4">
                <Form.Item
                    name="categoryName"
                    label="Category Name"
                    rules={[{ required: true, message: 'Please enter category name' }]}
                >
                    <Input placeholder="Enter category name" className="h-10" />
                </Form.Item>

                <Form.Item name="status" label="Status" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <div className="flex justify-end gap-3 mt-6">
                    <Button onClick={onClose} className="h-10 px-6">
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="h-10 px-6 bg-[#055E6E] hover:bg-[#044a57] border-none"
                    >
                        {editingCategory ? 'Update' : 'Add'}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddEditCategoryModal;
