import { KeyboardArrowRight } from "@mui/icons-material";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").slice(1);

  let breadcrumPath = "";

  return (
    <div className="flex text-xs text-[#878787]">
      <span>
        <Link to="/" className="hover:text-[#2874f0]">
          Home
        </Link>
        <KeyboardArrowRight className="!w-3 !h-3 mx-1" />
      </span>
      {pathnames.map((path, index) => {
        breadcrumPath += `/${path}`;
        if (index === pathnames.length - 1) {
          return <span>{path}</span>;
        }
        return (
          <span>
            <Link to={breadcrumPath} className="hover:text-[#2874f0]">
              {path}
            </Link>
            <KeyboardArrowRight className="!w-3 !h-3 mx-1" />
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
