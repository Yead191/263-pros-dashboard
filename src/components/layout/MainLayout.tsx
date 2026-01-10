import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const MainLayout: React.FC = () => {
    return (
        <div className={` grid grid-cols-12  gap-6 `}>
            {/* side bar */}
            <div className="col-span-2   overflow-x-hidden ">
                <Sidebar />
            </div>

            {/* main container with header */}
            <div className="col-span-10  h-[100vh] ">
                <div className=" ">
                    <DashboardHeader />
                </div>

                <div className="  h-[calc(100vh-97px)]  ">
                    <div className="h-full overflow-y-auto rounded-md  ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
