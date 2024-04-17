import { IoNotificationsSharp } from "react-icons/io5";
const Navbar = () => {
    return (
        <div>
            <div className="  bg-blue-400 w-full px-2 sm:px-6  p-2 md:flex sm:flex  ">



                <div className=" justify-center text-center text-white "> Enable browser  Notification to avoid missing out on important activity  </div>

                <div className="flex" >

                <div className="  text-end text-white">Enable Notification</div>
                <IoNotificationsSharp size={24} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;