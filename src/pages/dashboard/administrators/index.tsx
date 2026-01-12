import { BsTrash } from 'react-icons/bs';
import { Button, Popconfirm, Table } from 'antd';
import { useState } from 'react';
import AdminModal from './AdminModal';
import administratorsData from '../../../constants/administrators-data';

const Administrators = () => {
    const [makeAdminModal, setMakeAdminModal] = useState(false);
    const columns = [
        {
            title: 'S.No',
            dataIndex: 'key',
            key: 'key',
            width: 150,
        },
        {
            title: 'Admin Name',
            dataIndex: 'admin_name',
            key: 'admin_name',
        },

        {
            title: 'Admin Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Admin Type',
            dataIndex: 'admin_type',
            key: 'admin_type',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 150,
            textAlign: 'center',
            render: () => (
                <Popconfirm title="Delete User" description="Are you sure to delete this task?">
                    <button>
                        <BsTrash className="text-red-600" size={20} />
                    </button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <div className="rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Administrator Management</h1>

                <Button
                    onClick={() => setMakeAdminModal(true)}
                    type="primary"
                    style={{
                        height: 45,
                    }}
                >
                    + Add Administrator
                </Button>
            </div>

            <Table columns={columns} dataSource={administratorsData} />
            <AdminModal open={makeAdminModal} setOpen={setMakeAdminModal} />
        </div>
    );
};

export default Administrators;
