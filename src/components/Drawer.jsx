import { Link, NavLink, Outlet } from "react-router-dom";
// import home from "../assets/logo/logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
// import budget from "../assets/dashboard/budget-preview.png";




// import { TiMediaPlay } from "react-icons/ti";
// import { IoNotificationsSharp } from "react-icons/io5";
// import { IoPersonSharp } from "react-icons/io5";
// import { IoChatbox } from "react-icons/io5";
// import { IoFilterCircleSharp } from "react-icons/io5";
// // import DiscussionForum from '../ui/DiscussionForum';
// // import MarketStories from '../ui/MarketStories';
// import { useState } from "react";



const Drawer = () => {
    // State for managing the open/close status of the sidebar
    // const [isOpen, setIsOpen] = useState(true);

    // // State for managing the active tab in the small device navbar
    // const [activeTab, setActiveTab] = useState('DiscussionForum');

    return (
        <div className="h-screen  bg-base-300 min-w-full  mx-auto">
            <div className="drawer  lg:drawer-open  mx-auto bg-white w-full rounded-2xl">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-300 flex flex-col">
                    {/* Page content  */}
                    {/* lg:ml-8 */}

                    <div className="sticky  top-0 z-[99]">
                        <div className="flex lg:hidden justify-between items-center bg-white px-4 py-2 ">
                            <Link to="/">
                                {/* <img className="w-48" src={home} alt="" /> */}
                            </Link>
                            <label
                                htmlFor="my-drawer-2"
                                className=" z-[999]     drawer-button "
                            >
                                <AiOutlineMenu className="text-2xl  "></AiOutlineMenu>
                            </label>
                        </div>
                    </div>
                    <div className=" bg-red-800  ">
                        {/* <Outlet></Outlet> */}
                        {/* <p>jdjfdjkf</p> */}
                    </div>
                </div>
                <div className="drawer-side z-[999] scrollable-content">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <div className="w-60 h-full bg-white  bg-gradient-to-br  justify-between  flex flex-col">
                        <div>

                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <IoPersonSharp size={24} />
                            <span className="ml-2">Hello, User</span>
                        </div>
                        <div>
                            <IoNotificationsSharp size={24} />
                            <span className="h-2 w-2 bg-red-700 top-5 right-5 absolute rounded-full b border-[1px] border-white"></span>
                           

                        </div>



                    </div>
                            <div className="w-48  rounded-lg lg:mt-3">
                                <figure>
                                    <Link to="/">
                                        {/* <img src={home} alt="logo of asset hexa" /> */}
                                    </Link>
                                </figure>
                            </div>
                            <ul className="menu text-lg  space-y-2   rounded-lg mt-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex px-4 gap-3 items-center bg-[#38d626] text-white p-2 rounded-xl  pr-4"
                                            : "flex px-4 p-2 items-center mr-4 gap-3"
                                    }
                                    to="/dashboard/overView"
                                >
                                    <MdOutlineDashboard /> Overview
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex px-4 gap-3 items-center bg-[#38d626] text-white p-2 rounded-xl  pr-4"
                                            : "flex px-4 p-2 items-center mr-4 gap-3"
                                    }
                                    to="/dashboard/transection"
                                >
                                    <GrTransaction />
                                    Transection
                                </NavLink>

                              

                                

                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex px-4 gap-3 items-center bg-[#38d626] text-white p-2 rounded-xl  pr-4"
                                            : "flex px-4 p-2 items-center mr-4 gap-3"
                                    }
                                    to="/dashboard/addBlog"
                                >
                                    <CgProfile />
                                    Add Blog
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex px-4 gap-3 items-center bg-[#38d626] text-white p-2 rounded-xl  pr-4"
                                            : "flex px-4 p-2 items-center mr-4 gap-3"
                                    }
                                    to="/dashboard/investments"
                                >
                                    <IoStatsChartSharp />
                                    Investments
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex px-4 gap-3 items-center bg-[#38d626] text-white p-2 rounded-xl  pr-4"
                                            : "flex px-4 p-2 items-center mr-4 gap-3"
                                    }
                                    to="/dashboard/business"
                                >
                                    <MdAccountBalance />
                                    Business
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex px-4 gap-3 items-center bg-[#38d626] text-white p-2 rounded-xl  pr-4"
                                            : "flex px-4 p-2 items-center mr-4 gap-3"
                                    }
                                    to="/dashboard/profile"
                                >
                                    <CgProfile />
                                    Profile
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;




