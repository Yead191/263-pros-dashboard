
import { Card } from 'antd';
import TotalEarning from './TotalEarning';
import UserChart from './UserChart';

const App: React.FC = () => {

  const StatCard: React.FC<{ icon: string; title: string; value: string; }> = ({
    icon,
    title,
    value,

  }) => (
    <Card className="rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl`}>
          <img src={icon} alt="icon" className="w-8" />
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className=" pb-5">
      <div className="">
        <div className='flex flex-col gap-y-2 py-5 px-[30px] rounded-lg shadow-sm border border-gray-200 mb-6'>
          <p className='text-[#121212]'>Hi, Good Morning</p>
          <h2 className='text-2xl font-semibold text-[#121212]'>Welcome Back to FaceAI Dashboard</h2>
        </div>
        {/* Stats Cards */}
        <p className='text-2xl font-semibold text-[#121212] pb-3'>User’s Overview</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            icon="/icons/users.png"
            title="Total User"
            value="32k"

          />
          <StatCard
            icon="/icons/earning.png"
            title="Total Earnings"
            value="68K"
          />
          <StatCard
            icon="/icons/package.png"
            title="Total Subscribers"
            value="20K"
          />
          <StatCard
            icon="/icons/study-notes.png"
            title="Total Templates"
            value="18K"

          />
        </div>

        {/* Chart */}
        <div className="grid grid-cols-12  gap-2 items-center ">
          <div className="col-span-6 ">
            {/* total services */}

            <TotalEarning />
          </div>
          <div className="col-span-6 ">
            <UserChart />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;