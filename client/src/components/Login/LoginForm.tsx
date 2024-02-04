import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../app/hooks";
import { setLoginModal } from "../../features/login/loginSlice";

type Props = {
  setAccount: React.Dispatch<React.SetStateAction<"login" | "singup">>;
  setShowLoginModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<Props> = ({ setAccount }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleLogin: SubmitHandler<FormData> = async data => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (response.user) {
        const token = await response.user.getIdToken();
        Cookies.set("token", token, { expires: 30 });
        dispatch(setLoginModal(false));
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full h-full md:w-[85%] p-10 ">
      <label className="relative cursor-auto">
        <input
          type="email"
          {...register("email", { required: true })}
          className="input mb-7"
          placeholder=" "
        />
        <span className="text-base font-[400] text-[#878787]/90 absolute left-0 transition duration-200 input__text">
          Enter Email
        </span>
        {errors.email && (
          <p className="text-xs font-sans text-[#ff2137] font-semibold absolute -bottom-5">
            Please enter valid email.
          </p>
        )}
      </label>
      <label className="relative cursor-auto">
        <input
          type="password"
          {...register("password", { required: true })}
          className="input"
          placeholder=" "
        />
        <span className="text-base font-[400] text-[#878787]/90 absolute left-0 transition duration-200 input__text">
          Enter Password
        </span>
        {errors.email && (
          <p className="text-xs font-sans text-[#ff2137] font-semibold absolute -bottom-5">
            Please enter valid password.
          </p>
        )}
      </label>
      <p className="w-[75%] md:w-full text-xs text-[#878787] mt-10">
        By continuing, you agree to Flipkart's{" "}
        <span className="text-[#2874f0]">Terms of Use</span> and
        <span className="text-[#2874f0]"> Privacy Policy</span> .
      </p>
      <button
        type="submit"
        className="w-[75%] h-[48px] md:w-full bg-[#fb641b] text-white text-sm rounded my-2 shadow-md">
        Login
      </button>
      <button
        onClick={() => setAccount("singup")}
        className="w-[75%] md:w-full border-none bg-transparent text-xs text-[#2874f0]">
        New to Flipkart? Create an account
      </button>
    </form>
  );
};

export default LoginForm;
