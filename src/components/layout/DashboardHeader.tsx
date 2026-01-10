import { FiBell } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { getFormattedPathFromPathname } from '../../utils/formatPath';

export default function DashboardHeader() {
    const pathname = useLocation().pathname;
    const keyItem = getFormattedPathFromPathname(pathname);
    return (
        <div className="">
            <div className=" border-b border-gray-200 px-4 sm:px-6 py-3  bg-[#F6F7F8] h-[82px] rounded-bl-xl mb-6 flex items-center justify-between">
                {/* Left section - Greeting */}
                <div>
                    <h1 className="text-xl sm:text-3xl text-[#292929] font-semibold">{keyItem}</h1>
                </div>

                {/* Right section - Actions */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Notifications */}
                    <Link to="/notification">
                        <button className="relative p-2 text-[#223047] hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                            <FiBell className="h-6 w-6" />
                            <span className="absolute -top-1 -right-0 flex items-center justify-center bg-primary text-white text-xs font-semibold rounded-full w-6 h-6 shadow-md border-2 border-white">
                                2
                            </span>
                        </button>
                    </Link>
                    {/* Profile */}
                    <Link to="/profile">
                        <div className="flex items-center space-x-3 ">
                            <img
                                src="https://i.ibb.co.com/3YvJKdsk/polok.jpg"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover cursor-pointer"
                            />
                            <div className="h-10 w-[2px] bg-[#BFBFBF] "></div>
                            <div className="flex flex-col">
                                <span className="text-sm sm:text-base font-semibold text-gray-900">Administrator</span>
                                <span className="text-xs sm:text-sm text-gray-400">Super Admin</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
