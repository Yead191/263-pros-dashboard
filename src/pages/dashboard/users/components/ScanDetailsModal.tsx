'use client';

import { Modal } from 'antd';
import { Scan } from '../../../../demo-data/user-data';
import { ResultsStep } from './ResultsStep';
import { MOCK_ANALYSIS_RESULT } from '../../../../demo-data/MOCK_ANALYSIS_RESULT';
import { Check } from 'lucide-react';
import { improvementTips, keyStrengths } from '../../../../demo-data/scan-data';

interface ScanDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    scan: Scan | null;
}

export function ScanDetailsModal({ isOpen, onClose, scan }: ScanDetailsModalProps) {
    if (!scan) return null;

    return (
        <Modal title="Scan Details" open={isOpen} onCancel={onClose} footer={null} centered width={1000}>
            <div className="grid grid-cols-12 gap-8 ">
                <div className="md:min-w-lg  p-2 md:pt-5 rounded-2xl whiteShadow  pt-[610px] col-span-5 ">
                    <ResultsStep results={MOCK_ANALYSIS_RESULT} />
                </div>
                <div className="md:min-w-lg min-w-full   pt-5 whiteShadow rounded-2xl p-6 space-y-6 col-span-7">
                    <div>
                        <h2 className="text-[#2F2F2F] text-lg font-medium mb-3">Key Strengths</h2>
                        <div className="space-y-2">
                            {keyStrengths.map((strength, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 whiteShadow  rounded-[10px] px-4 py-3"
                                >
                                    <Check className="w-4 h-4 text-[#A855F7] shrink-0" />
                                    <span className="text-[#000000] text-sm">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#2F2F2F] text-lg font-medium mb-3">Improvement Tips</h2>
                        <div className="space-y-2">
                            {improvementTips.map((tip, index) => (
                                <div key={index} className=" whiteShadow  rounded-[10px] px-4 py-3">
                                    <span className="text-[#000000] text-sm">{tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
