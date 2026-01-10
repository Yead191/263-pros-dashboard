'use client';

import { Modal, Button, Row, Col, Switch, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useState } from 'react';
import { User } from '../../../../demo-data/user-data';
import DeleteModal from '../../../../components/shared/DeleteModal';

interface ActionModalProps {
    isOpen: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    user: User | null;
    onToggleBlock: (userId: string, isBlocking: boolean) => void;
    onDeleteUser: (userId: string) => void;
}

export function ActionModal({ isOpen, user, onToggleBlock, setIsOpen }: ActionModalProps) {
    const [isBlocked, setIsBlocked] = useState(user?.status === 'blocked');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // const [deleteId, setDeleteId] = useState('');
    const handleToggleBlock = (checked: boolean) => {
        if (user) {
            setIsBlocked(checked);
            onToggleBlock(user.id, checked);
        }
    };

    // const handleDelete = () => {
    //     if (deleteId) {
    //         onDeleteUser(deleteId);
    //         setIsDeleteModalOpen(false);
    //         setIsOpen && setIsOpen(false);
    //     }
    // };

    const onClose = () => {
        setIsOpen && setIsOpen(false);
    };

    if (!user) return null;

    return (
        <Modal title="Action" open={isOpen} onCancel={onClose} footer={null} centered>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                {/* Disable User Access */}
                <Row
                    justify="space-between"
                    align="middle"
                    style={{
                        padding: 12,
                        border: '1px solid #f0f0f0',
                        borderRadius: 6,
                    }}
                >
                    <Col>
                        <span style={{ fontSize: 14 }}>Disable User Access</span>
                    </Col>
                    <Col>
                        <Switch checked={isBlocked} onChange={handleToggleBlock} />
                    </Col>
                </Row>

                {/* Delete User Account */}
                <Row
                    justify="space-between"
                    align="middle"
                    style={{
                        padding: 12,
                        border: '1px solid #f0f0f0',
                        borderRadius: 6,
                    }}
                >
                    <Col>
                        <span style={{ fontSize: 14 }}>Delete User Account</span>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => {
                                setIsDeleteModalOpen(true);
                                // setDeleteId(user.id);
                            }}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Space>
            <DeleteModal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} />
        </Modal>
    );
}
