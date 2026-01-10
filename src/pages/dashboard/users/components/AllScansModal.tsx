'use client';

import { Modal, Space } from 'antd';
import { Scan } from '../../../../demo-data/user-data';

interface AllScansModalProps {
    isOpen: boolean;
    onClose: () => void;
    scans: Scan[];
    onViewScanDetails: (scan: Scan) => void;
}

export function AllScansModal({ isOpen, onClose, scans, onViewScanDetails }: AllScansModalProps) {
    return (
        <Modal title="All Scan" open={isOpen} onCancel={onClose} footer={null} width={600} centered>
            <div style={{ maxHeight: 400, overflowY: 'auto' }}>
                {scans.map((scan) => (
                    <div
                        onClick={() => onViewScanDetails(scan)}
                        key={scan.id}
                        className="cursor-pointer"
                        style={{
                            padding: 16,
                            border: '1px solid #f0f0f0',
                            borderRadius: 6,
                            marginBottom: 12,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <Space size="large">
                                <span style={{ fontWeight: 600, minWidth: 50 }}>{scan.version}</span>
                                <span style={{ fontSize: 14, color: '#999' }}>{scan.date}</span>
                                <span style={{ fontSize: 12, color: '#999' }}>{scan.status}</span>
                            </Space>
                        </div>
                        <Space>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 600, fontSize: 14 }}>{scan.score}/10</div>
                                <div style={{ fontSize: 12, color: '#52c41a' }}>+{scan.improvement}%</div>
                            </div>
                        </Space>
                    </div>
                ))}
            </div>
        </Modal>
    );
}
