
const Navbar = () => {
    return (
        <div>
            <header className="bg-blue-500 w-full px-2 sm:px-6 p-2 md:flex sm:flex  ">
               
                <div className="  flex  sm:flex-row items-center gap-2 sm:gap-x-4">

                    <div className="text-center sm:text-left"> Your Ai StoryBoarding Bundle Discount expires in <span className="text-red-400 px-1 ml-2 bg-white">5:01</span> </div>
                    
                </div>
                <div className="flex px-2 bg-orange-300 p-1 justify-center items-center md:mr-4 ">
                    
                    <p className="px-2 font-bold text-sm text-slate-700">One-Time Offer</p>
                </div>
            </header>
        </div>
    );
};

export default Navbar;