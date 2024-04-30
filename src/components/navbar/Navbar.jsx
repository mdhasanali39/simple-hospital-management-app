import logoImage from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { GoScreenFull } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import profileImg from '../../assets/images/avatar-1.jpg';
import useStateManager from "../../hooks/useStateManager";


const Navbar = () => {

    // using state manager 
    const {isSideNavbarCollapse,setIsSideNavbarCollapse} = useStateManager()

  return (
    <div className="flex sticky top-0 bg-white">
      {/* logo  */}
      <div className={`flex gap-3 items-center py-5 pl-6 ${isSideNavbarCollapse ? 'w-[79px] ':'w-[79px] md:w-[249px]'} `}>
        <img src={logoImage} alt="logo" className="w-8 h-8" />
        <h3 className={`font-semibold text-lg hidden md:block ${isSideNavbarCollapse ? 'hidden md:hidden':' hidden md:block'}`}>Dream Hospital</h3>
      </div>
      {/* navbar right  */}
      <div className={`border-l border-b py-5 px-6 ${isSideNavbarCollapse? 'w-[calc(100%-79px)] md:w-[calc(100%-79px)]':''} w-[calc(100%-100px)] md:w-[calc(100%-249px)]`}>
        <div className="flex gap-4 items-center justify-between">
          {/* menu icon  */}
          <div>
            <MdMenu
             size={26}
              onClick={()=>setIsSideNavbarCollapse(prev=>!prev)} 
                className="cursor-pointer"
              />
          </div>
          {/* search bar, fullscreen, and profile section */}
          <div className="flex items-center gap-4">
            {/* search bar  */}
            <div>
              <div className="relative hidden md:block">
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="outline-none bg-[#F6F6F7] rounded-md py-2 pl-4 pr-10 text-sm"
                />
                <IoSearchOutline size={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-35" />
              </div>
              <IoSearchOutline size={24} className="md:hidden"/>
            </div>
            {/* fullscreen control  */}
            <div>
                <GoScreenFull size={24}/>
            </div>
            {/* profile  */}
            <div className="flex gap-2 items-center">
            {/* profile image  */}
                <div>
                    <img src={profileImg} alt="profile image" className="w-6 h-6 rounded-full"/>
                </div>
                {/* name & dropdown button */}
                <div className="flex items-center gap-1">
                    <h3>Nik Patel</h3>
                    <FaAngleDown />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
