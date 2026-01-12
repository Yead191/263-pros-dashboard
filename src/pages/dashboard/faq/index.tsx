import { useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import { CiEdit } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { Button, Flex } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import AddFaqForm from './faqs/AddFaqForm';
import { faqData } from '../../../constants/faq-data';

const FAQPage = () => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const [modalData, setModalData] = useState<{ id: string; answer: string; question: string } | null>(null);
    const [faqInfo, setFaqInfo] = useState(faqData);

    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            setFaqInfo((prev) => prev.filter((item) => item.id !== id));
            Swal.fire('Deleted!', 'The FAQ has been deleted.', 'success');
        }
    };

    return (
        <div className="p-6 bg-[#FEFEFE] rounded-md min-h-full">
            <Flex vertical={false} gap={10} align="center" justify="space-between" className="mb-6">
                <div>
                    <h1 className="text-2xl text-foreground font-semibold">Frequently Asked Questions</h1>
                </div>

                <div>
                    <Button
                        icon={<AiOutlinePlus />}
                        onClick={() => setOpenAddModel(true)}
                        style={{ height: 40, backgroundColor: '#055E6E', border: 'none' }}
                        type="primary"
                    >
                        Add FAQ
                    </Button>
                </div>
            </Flex>

            <div className="mt-5 space-y-4">
                {faqInfo?.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-start py-4 px-6 rounded-lg bg-white shadow-sm border border-border hover:shadow-md transition-shadow"
                    >
                        <GoQuestion color="#055E6E" size={25} className="mt-1" />
                        <div className="flex-1 mx-4">
                            <p className="text-base font-medium text-foreground mb-2">{item?.question}</p>
                            <div className="">
                                <p className="text-muted-foreground leading-relaxed text-sm">{item?.answer}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CiEdit
                                onClick={() => {
                                    setModalData(item);
                                    setOpenAddModel(true);
                                }}
                                className="text-2xl cursor-pointer text-[#055E6E] hover:scale-110 transition-transform"
                            />
                            <RxCross2
                                onClick={() => handleDelete(item.id)}
                                className="text-2xl cursor-pointer text-red-600 hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <AddFaqForm
                setOpenAddModel={setOpenAddModel}
                openAddModel={openAddModel}
                modalData={modalData}
                setModalData={setModalData}
            />

            <style>{`
                .ant-modal-content {
                    border-radius: 12px !important;
                }
            `}</style>
        </div>
    );
};

export default FAQPage;
