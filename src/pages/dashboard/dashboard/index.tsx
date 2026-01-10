import { Card } from 'antd';
import { Users, UserRoundCheck, CircleDollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import EarningsChart from './EarningsChart';

const Dashboard: React.FC = () => {
    const StatCard: React.FC<{
        icon: React.ReactNode;
        title: string;
        value: string;
        bgColor: string;
        trendIcon?: React.ReactNode;
        trendValue?: string;
        trendType?: 'up' | 'down';
    }> = ({ icon, title, value, bgColor, trendValue, trendType }) => (
        <Card className="rounded-2xl border-none h-full" style={{ backgroundColor: bgColor }}>
            <div className="flex flex-col h-full justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center">{icon}</div>
                    <p className="text-[#333333] text-sm font-medium">{title}</p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-4xl font-semibold text-[#1E1E1E]">{value}</p>
                    {trendValue && (
                        <div
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium text-white ${
                                trendType === 'down' ? 'bg-[#D12C2C]' : 'bg-[#28A745]'
                            }`}
                        >
                            {trendType === 'down' ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                            {trendValue}
                            <span className="opacity-80 ml-1">vs last month</span>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );

    return (
        <div className=" space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={<Users className="text-[#1E1E1E]" size={20} />}
                    title="Total Customer"
                    value="44,225"
                    bgColor="#B9D9D6"
                    trendValue="15%"
                    trendType="down"
                />
                <StatCard
                    icon={<UserRoundCheck className="text-[#1E1E1E]" size={20} />}
                    title="Total Provider"
                    value="1,225"
                    bgColor="#FFE9B1"
                    trendValue="15%"
                    trendType="up"
                />
                <StatCard
                    icon={<CircleDollarSign className="text-[#1E1E1E]" size={20} />}
                    title="Total Earnings"
                    value="$2,22,500"
                    bgColor="#D3EFDC"
                />
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
                <EarningsChart />
            </div>
        </div>
    );
};

export default Dashboard;
