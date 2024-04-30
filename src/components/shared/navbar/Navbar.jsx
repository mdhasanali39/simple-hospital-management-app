import logoImage from "../../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { GoScreenFull } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown, FaGear, FaLock, FaUser } from "react-icons/fa6";
import profileImg from "../../../assets/images/avatar-1.jpg";
import useStateManager from "../../../hooks/useStateManager";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  // using state manager
  const {
    isSideNavbarCollapse,
    setIsSideNavbarCollapse,
    isNotificationPopupOpen,
    setIsNotificationPopupOpen,
    isSearchPopupOpen,
    setIsSearchPopupOpen,
    isProfilePopupOpen,
    setIsProfilePopupOpen,
  } = useStateManager();

  return (
    <div className="flex sticky top-0 z-30 bg-white">
      {/* logo  */}
      <Link
        onMouseEnter={() => setIsSideNavbarCollapse(false)}
        onMouseLeave={() => setIsSideNavbarCollapse(true)}
        to="/"
        className={`flex gap-3 items-center py-5 pl-6 ${
          isSideNavbarCollapse ? "w-[79px] " : "w-[79px] md:w-[249px]"
        } `}
      >
        <img src={logoImage} alt="logo" className="w-8 h-8" />
        <h3
          className={`font-semibold text-lg hidden md:block ${
            isSideNavbarCollapse ? "hidden md:hidden" : " hidden md:block"
          }`}
        >
          Dream Hospital
        </h3>
      </Link>
      {/* navbar right  */}
      <div
        className={`border-l border-b py-5 px-6 ${
          isSideNavbarCollapse
            ? "w-[calc(100%-79px)] md:w-[calc(100%-79px)]"
            : ""
        } w-[calc(100%-100px)] md:w-[calc(100%-249px)]`}
      >
        <div className="flex gap-4 items-center justify-between">
          {/* menu icon  */}
          <div>
            <MdMenu
              size={26}
              onClick={() => setIsSideNavbarCollapse((prev) => !prev)}
              className="cursor-pointer"
            />
          </div>
          {/* search bar, fullscreen, and profile section */}
          <div className="flex items-center gap-4">
            {/* search bar  */}
            <div className="relative">
              <div className="relative hidden md:block">
                <input
                  onClick={() => setIsSearchPopupOpen(true)}
                  onBlur={() => setIsSearchPopupOpen(false)}
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="outline-none bg-[#F6F6F7] rounded-md py-2 pl-4 pr-10 text-sm"
                />
                <IoSearchOutline
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-35"
                />
              </div>
              <IoSearchOutline size={24} className="md:hidden" />
              {/* search result popup */}
              <div
                className={`absolute  ${
                  isSearchPopupOpen
                    ? " -z-10 top-[51px] "
                    : "-top-[5000px] -z-10"
                } left-0 flex flex-col justify-between min-h-[320px] min-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden`}
              >
                {/* header */}
                <div className="h-[10%] py-4 px-5">
                  <h3 className="text-lg">Found 6 results</h3>
                  {/* <button className="cursor-pointer whitespace-nowrap">
                      Clear All
                    </button> */}
                </div>
                {/* body */}
                <div className="overflow-hidden overflow-y-auto min-h-[260px] max-h-[260px]">
                  {/* TODO:NEED TO BE DYNAMIC LATTER */}
                  <div>
                    <div className="flex gap-3 items-center  hover:bg-[#F6F6F7]  px-5 py-4 ">
                      {/* img  */}
                      <div className="flex-1">
                        <FaGear />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <p className="text-sm opacity-70">
                          User profile settings
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center  hover:bg-[#F6F6F7]  px-5 py-4 ">
                      {/* img  */}
                      <div className="flex-1">
                        <FaGear />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <p className="text-sm opacity-70">
                          User profile settings
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* users  */}
                  <div>
                    <div>
                      <h3 className="px-5 py-4 uppercase">Users</h3>
                    </div>
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 ">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">Web Developer</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 ">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fullscreen control  */}
            <div>
              <GoScreenFull size={24} />
            </div>
            {/* notification  */}
            <div>
              <div className="relative">
                <div
                  onClick={() => setIsNotificationPopupOpen((prev) => !prev)}
                  className="cursor-pointer"
                >
                  <IoNotificationsOutline size={24} />
                  <p className="flex items-center justify-center absolute -right-1 -top-[14px] w-5 h-5 text-white text-sm bg-red-400 rounded-full">
                    6
                  </p>
                </div>
                {/* notification popup */}
                <div
                  className={`absolute  ${
                    isNotificationPopupOpen
                      ? " -z-10 top-[51px] "
                      : "-top-[5000px] -z-10"
                  } right-0 flex flex-col justify-between min-h-[320px] min-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden`}
                >
                  {/* header */}
                  <div className="h-[10%] flex justify-between items-center py-4 px-5">
                    <h3 className="text-lg">Notification</h3>
                    <button className="cursor-pointer whitespace-nowrap">
                      Clear All
                    </button>
                  </div>
                  {/* body */}
                  <div className="overflow-hidden overflow-y-auto min-h-[260px] max-h-[260px]">
                    {/* TODO:NEED TO BE DYNAMIC LATTER */}
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 border-b">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">
                          Hi, How are you? What about our next meeting
                        </p>
                      </div>
                    </div>
                    {/* TODO:NEED TO BE DYNAMIC LATTER */}
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 border-b">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">
                          Hi, How are you? What about our next meeting
                        </p>
                      </div>
                    </div>
                    {/* TODO:NEED TO BE DYNAMIC LATTER */}
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 border-b">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">
                          Hi, How are you? What about our next meeting
                        </p>
                      </div>
                    </div>
                    {/* TODO:NEED TO BE DYNAMIC LATTER */}
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 border-b">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">
                          Hi, How are you? What about our next meeting
                        </p>
                      </div>
                    </div>
                    {/* TODO:NEED TO BE DYNAMIC LATTER */}
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 border-b">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">
                          Hi, How are you? What about our next meeting
                        </p>
                      </div>
                    </div>
                    {/* TODO:NEED TO BE DYNAMIC LATTER */}
                    <div className="flex gap-3 items-start  hover:bg-[#F6F6F7]  px-5 py-4 border-b">
                      {/* img  */}
                      <div className="flex-1 mt-1">
                        <img
                          src={profileImg}
                          alt="profile image"
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <h2>Cristina Pride</h2>
                        <p className="text-sm opacity-70">
                          Hi, How are you? What about our next meeting
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end - View all button  */}
                  <div className="h-[10%] w-full hover:bg-[#F6F6F7] text-center transition duration-200 px-5 py-3">
                    <button className="text-lg text-blue-600">View All</button>
                  </div>
                </div>
              </div>
            </div>
            {/* profile  */}
            <div className="relative">
              <div
                onClick={() => setIsProfilePopupOpen((prev) => !prev)}
                className="flex gap-2 items-center"
              >
                {/* profile image  */}
                <div>
                  <img
                    src={profileImg}
                    alt="profile image"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                {/* name & dropdown button */}
                <div className="flex items-center gap-1">
                  <h3>Nik Patel</h3>
                  <FaAngleDown />
                </div>
              </div>
              {/* profile popup  */}
              <div
                className={`absolute  ${
                  isProfilePopupOpen
                    ? " -z-10 top-[51px] "
                    : "-top-[5000px] -z-10"
                } right-0 flex flex-col justify-between min-h-[150px] min-w-[200px] bg-white shadow-lg rounded-lg overflow-hidden`}
              >
                {/* header */}
                <div className="h-[10%] py-4 px-5">
                  <h3 className="text-lg">Welcome !</h3>
                </div>
                {/* body */}
                <div className="overflow-hidden overflow-y-auto min-h-[90px] max-h-[90px]">
                  {/* TODO:NEED TO BE DYNAMIC LATTER */}
                  <div className="border-b">
                    <div className="flex gap-3 items-center  hover:bg-[#F6F6F7]  px-5 py-2">
                      {/* img  */}
                      <div className="flex-1">
                        <FaUser />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <p className="text-sm opacity-70">My Account</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center  hover:bg-[#F6F6F7]  px-5 py-2">
                      {/* img  */}
                      <div className="flex-1">
                        <FaLock />
                      </div>
                      {/* text content */}
                      <div className="flex-[9]">
                        <p className="text-sm opacity-70">Lock Screen</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end - logout button  */}
                <div className="h-[10%] w-full hover:bg-[#F6F6F7] text-center transition duration-200 px-5 py-3">
                <div className="flex gap-3 items-center  hover:bg-[#F6F6F7]  px-5 py-2">
                      {/* img  */}
                      <div className="">
                        <FaSignOutAlt />
                      </div>
                      {/* text content */}
                      <div className="">
                        <p className="text-sm opacity-70">Logout</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
