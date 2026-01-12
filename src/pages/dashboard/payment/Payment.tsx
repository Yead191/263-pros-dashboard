import { Table } from 'antd';
import paymentData from '../../../constants/payment-data';

const Payment = () => {
    const columns = [
        {
            title: 'Sl. No',
            dataIndex: 'sl_no',
            key: 'sl_no',
            width: 120,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Pay Amount',
            dataIndex: 'pay_amount',
            key: 'pay_amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
    ];

    return (
        <div className="rounded-lg shadow-sm border border-gray-200 p-4">
            <h1 className="text-2xl font-semibold mb-4">Payment List</h1>
            <Table columns={columns} dataSource={paymentData} />
        </div>
    );
};

export default Payment;
