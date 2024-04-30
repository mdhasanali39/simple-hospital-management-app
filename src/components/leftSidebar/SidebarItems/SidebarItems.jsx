import Item from "../Item/Item";
import { MdOutlineViewComfyAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GoReport } from "react-icons/go";
import { FaRegMap } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { LuPill } from "react-icons/lu";
import { LiaCapsulesSolid } from "react-icons/lia";
import { FaUserDoctor, FaAngleDown } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import useStateManager from "../../../hooks/useStateManager";

const SidebarItems = () => {
  // state only for controll pricelist

  // const location = useLocation()

  // const [isActive, setIsActive] = useState(false)
  // using state manager
  const { isSideNavbarCollapse } = useStateManager();

  return (
    <div className="space-y-4">
      <Item
        label="Dashboard"
        path="/dreamHospital/dashboard"
        icon={MdOutlineViewComfyAlt}
      />
      <Item label="Profile" path="/dreamHospital/profile" icon={CgProfile} />
      <Item
        label="Invoices"
        path="/dreamHospital/invoices"
        icon={LiaFileInvoiceSolid}
      />
      <Item label="Reports" path="/dreamHospital/reports" icon={GoReport} />
      <Item label="Branches" path="/dreamHospital/branches" icon={FaRegMap} />
      <Item label="Tests" path="/dreamHospital/tests" icon={GrTest} />
      <Item label="Cultures" path="/dreamHospital/cultures" icon={LuPill} />
      <Item
        label="Cultures Options"
        path="/dreamHospital/cultures-options"
        icon={LuPill}
      />
      <Item
        label="Antibiotics"
        path="/dreamHospital/antibiotics"
        icon={LiaCapsulesSolid}
      />
      <Item label="Doctors" path="/dreamHospital/doctor" icon={FaUserDoctor} />
      {/* only for priceList  */}
      <div>
        <h3
          className={`flex items-center gap-3 text-gray-500 font-medium hover:text-blue-500 `}
        >
         <FaListUl/> {isSideNavbarCollapse ? '':'PriceList'} {isSideNavbarCollapse ? '':<FaAngleDown />}
        </h3>
        <div className="ml-9 pt-2 space-y-4">
          <Item label="Test" path="/dreamHospital/priceList/test" />
          <Item label="Culture" path="/dreamHospital/priceList/culture" />
        </div>
      </div>
    </div>
  );
};

export default SidebarItems;
