import {
  AccountCircle,
  Favorite,
  KeyboardArrowDown,
  Logout,
  ShoppingBag,
} from "@mui/icons-material";
import AccountItem from "./AccountItem";
import { auth } from "../../firebase";
import Cookies from "js-cookie";

const Account = () => {
  const handleLogout = () => {
    auth.signOut();
    Cookies.remove("token");
    window.location.reload();
  };
  return (
    <div className="relative group">
      <div className="flex items-center">
        <h2 className="cursor-pointer">My Account</h2>
        <KeyboardArrowDown className="!h-4 group-hover:rotate-180" />
      </div>

      <div className="hidden group-hover:block absolute top-[26px] w-[170px] bg-white shadow-md rounded">
        <AccountItem
          title="My Profile"
          link="/account"
          icon={<AccountCircle className="!h-4 text-[#2874f0]" />}
        />
        <AccountItem
          title="Orders"
          link="/account/orders"
          icon={<ShoppingBag className="!h-4 text-[#2874f0]" />}
        />
        <AccountItem
          title="Wishlist"
          link="/wishlist"
          icon={<Favorite className="!h-4 text-[#2874f0]" />}
        />
        <AccountItem
          title="Logout"
          icon={<Logout className="!h-4 text-[#2874f0]" />}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
};

// import { AccountCircle } from "@mui/icons-material";
// import AccountItem from "./AccountItem";

// const Account = () => {
//   return (
//     <div>
//       <h2>Account</h2>
// 		  <AccountItem title="My account" icon={<AccountCircle />} />
//     </div>
//   );
// };

export default Account;
