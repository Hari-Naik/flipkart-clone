import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

type Props = {
  title: string;
  icon: React.ReactNode;
  link?: String;
  handleLogout?: () => void;
};

const AccountItem: React.FC<Props> = ({
  title,
  icon: Icon,
  handleLogout,
  link,
}) => {
  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  return (
    <>
      {title === "Logout" ? (
        <div
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-[#f1f2f4] transition duration-300">
          {Icon}
          <p className="text-[13px] text-[#5c5c5c]">{title}</p>
        </div>
      ) : (
        <Link
          to={`${link}`}
          className="flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-[#f1f2f4] transition duration-300">
          {Icon}
          <p className="text-[13px] text-[#5c5c5c]">{title}</p>
          {title === "Wishlist" && wishlist.length > 0 && (
            <span className="flex items-center justify-center text-xs text-gray-500 ml-auto h-4 w-4 bg-gray-300 rounded-md">
              {wishlist.length}
            </span>
          )}
        </Link>
      )}
    </>
  );
};

export default AccountItem;
