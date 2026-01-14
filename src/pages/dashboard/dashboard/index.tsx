import { Users, UserRoundCheck, CircleDollarSign } from 'lucide-react';
import EarningsChart from './EarningsChart';
import { StatCard } from './StatsCard';

const Dashboard: React.FC = () => {
    return (
        <div className=" space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={<Users className="text-[#1E1E1E]" size={20} />}
                    title="Total Customer"
                    value="44,225.00"
                    bgColor="#B9D9D6"
                    trendValue="15%"
                    trendType="down"
                />
                <StatCard
                    icon={<UserRoundCheck className="text-[#1E1E1E]" size={20} />}
                    title="Total Provider"
                    value="1,225.00"
                    bgColor="#FFE9B1"
                    trendValue="15%"
                    trendType="up"
                />
                <StatCard
                    icon={<CircleDollarSign className="text-[#1E1E1E]" size={20} />}
                    title="Total Earnings"
                    value="$222,500.00"
                    bgColor="#D3EFDC"
                />
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-3xl p-2 shadow-sm">
                <EarningsChart />
            </div>
        </div>
    );
};

export default Dashboard;
