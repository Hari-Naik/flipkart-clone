import { useState } from "react";
import ReactDom from "react-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "../../app/hooks";
import { setLoginModal } from "../../features/login/loginSlice";

// interface Props {
//   setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Login = () => {
  const [account, setAccount] = useState<"login" | "singup">("login");
  const dispatch = useAppDispatch();
  return (
    <div className="bg-black/50 w-screen h-screen z-[100] fixed top-0 left-0 flex items-center justify-center">
      <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] h-[70vh] bg-white flex shadow-md">
        <div className="hidden md:flex md:flex-col justify-between h-full bg-[#2874f0] p-10">
          <div className="text-white">
            <h1 className="text-xl font-semibold mb-2">
              {account === "login" ? "Login" : "Looks like you're new here!"}
            </h1>
            <p className=" text-sm">
              {account === "login"
                ? "Get access to your Orders, Wishlist and Recommendations"
                : "Sign up to get started"}
            </p>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="login img"
          />
        </div>
        {account === "login" ? (
          <LoginForm setAccount={setAccount} />
        ) : (
          <SignupForm setAccount={setAccount} />
        )}
      </div>
      <div className="h-[70vh] ml-2">
        <Close
          onClick={() => dispatch(setLoginModal(false))}
          className="text-white cursor-pointer -mt-4 "
        />
      </div>
    </div>
  );
};

const LoginModal = () => {
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return ReactDom.createPortal(<Login />, portalElement);
};

export default LoginModal;
