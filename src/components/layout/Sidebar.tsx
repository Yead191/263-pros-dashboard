import { ConfigProvider, Menu, MenuProps } from 'antd';
import { TSidebarItem } from '../../utils/generateSidebarItems';
import sidebarItems from '../../utils/sidebarItems';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import { LogOut } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    const getIcon = (icon: ReactNode | string) => {
        if (typeof icon === 'string') {
            return <img src={icon} className="w-6" alt="icon" />;
        }
        return icon;
    };

    const sidebarItemsGenerator = (items: TSidebarItem[]): MenuProps['items'] => {
        return items.map((item) => {
            if (item.children) {
                return {
                    key: item.key,
                    icon: getIcon(item.icon),
                    label: item.label,
                    children: item.children.map((child) => ({
                        key: `/${child.path}`,
                        icon: getIcon(child.icon),
                        label: <Link to={`/${child.path}`}>{child.label}</Link>,
                    })),
                };
            }
            return {
                key: `/${item.path}`,
                icon: getIcon(item.icon),
                label: <Link to={`/${item.path}`}>{item.label}</Link>,
            };
        });
    };

    return (
        <>
            <Link to="/">
                <div className="flex flex-col gap-3 items-center justify-center  mb-6 bg-[#F6F7F8] h-[82px] rounded-br-xl">
                    <img src="/Logo.png" alt="" className="h-8" />
                </div>
            </Link>
            <div className="relative h-[calc(100vh-125px)] overflow-auto pt-5 w-full bg-[#F6F7F8] px-2 rounded-r-xl">
                <div className=" flex flex-col h-[100%] ">
                    <div className="flex-1 overflow-y-auto w-full pb-12 ">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorText: '#414446',
                                },
                                components: {
                                    Menu: {
                                        itemActiveBg: '#055E6E',
                                        itemSelectedColor: '#fff',
                                        itemBorderRadius: '10px 10px 10px 10px' as any,
                                        itemHeight: 45,
                                        itemMarginBlock: 9,
                                        itemSelectedBg: '#055E6E',
                                    },
                                },
                            }}
                        >
                            <Menu
                                theme="light"
                                mode="inline"
                                selectedKeys={[location.pathname]}
                                openKeys={openKeys}
                                onOpenChange={handleOpenChange}
                                items={sidebarItemsGenerator(sidebarItems)}
                                style={{ background: 'transparent' }}
                            />
                        </ConfigProvider>
                    </div>

                    <div className="py-3 ps-4 absolute bottom-0 w-full bg-[#F6F7F8]">
                        <button
                            onClick={() => {
                                navigate('/login');
                            }}
                            className="w-full flex items-center gap-3 px-4  bg-white/15 
                          text-[#F44336]  font-semibold rounded-md transition"
                        >
                            <LogOut size={20} />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Sidebar;
