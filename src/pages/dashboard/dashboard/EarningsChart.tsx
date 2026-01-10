import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Select, Card } from 'antd';
import { earningsData } from '../../../demo-data/home-data';

const { Option } = Select;

const EarningsChart = () => {
    // Mapping the data to match the screenshot's scale (e.g., 15k instead of 150)
    const chartData = earningsData.map((item) => ({
        ...item,
        value: item.value * 20, // Adjusting to look more like the screenshot
    }));

    return (
        <Card className="rounded-2xl border-none shadow-none">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-medium text-[#1E1E1E]">Earnings</h2>
                <Select defaultValue="2025" className="w-24 custom-select" variant="filled">
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                </Select>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0D6D7D" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0D6D7D" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 14 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        tickFormatter={(value) => `${value / 1000}k`}
                        domain={[0, 12000]}
                        ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]}
                    />
                    <Tooltip
                        cursor={{ stroke: '#0D6D7D', strokeWidth: 2 }}
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="bg-[#0D6D7D] text-white px-4 py-2 rounded shadow-lg font-medium">
                                        {payload[0].value?.toLocaleString()}
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0D6D7D"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>

            <style>{`
        .custom-select .ant-select-selector {
          background-color: #F3F4F6 !important;
          border-radius: 8px !important;
          border: none !important;
        }
      `}</style>
        </Card>
    );
};

export default EarningsChart;
