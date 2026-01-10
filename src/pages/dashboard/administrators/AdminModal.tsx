import { Button, Form, Input, Modal } from 'antd';
import React from 'react';

interface IModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AdminModal: React.FC<IModalProps> = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            centered
            title={<p className="text-[24px] text-[#333333]">Add Administrator</p>}
            footer={false}
            open={open}
            onCancel={handleClose}
            width={500}
        >
            <Form
                style={{
                    color: '#767676',
                }}
                layout="vertical"
            >
                <Form.Item label="Name" name="name">
                    <Input
                        style={{
                            height: '40px',
                        }}
                        placeholder="John Doe"
                    />
                </Form.Item>
                <Form.Item label="Email">
                    <Input
                        style={{
                            height: '40px',
                        }}
                        type="email"
                        placeholder="email@gmail.com"
                    />
                </Form.Item>
                <Form.Item label="Password">
                    <Input
                        style={{
                            height: '40px',
                        }}
                        type="password"
                        placeholder="******"
                    />
                </Form.Item>
                <Form.Item>
                    <div className="flex justify-center w-full">
                        <Button
                            type="primary"
                            style={{
                                height: 40,
                                width: '100%',
                            }}
                        >
                            Add Admin
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AdminModal;