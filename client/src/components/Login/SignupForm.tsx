import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from "../../firebase";

import Cookies from "js-cookie";
import { useAppDispatch } from "../../app/hooks";
import { setLoginModal } from "../../features/login/loginSlice";

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<"login" | "singup">>;
}

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignupForm: React.FC<Props> = ({ setAccount }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (response.user) {
        const token = await response.user.getIdToken();
        console.log(token);
        Cookies.set("token", token, { expires: 30 });
        dispatch(setLoginModal(false));
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full md:w-[85%] p-10 ">
      <label className="relative cursor-auto">
        <input
          type="text"
          {...register("username", { required: true })}
          className="input mb-7"
          placeholder=" "
        />
        <span className="text-base font-[400] text-[#878787]/90 absolute left-0 transition duration-200 input__text">
          Enter Username
        </span>
        {errors.username && (
          <p className="text-xs font-sans text-[#ff2137] font-semibold absolute -bottom-5">
            This field is required.
          </p>
        )}
      </label>

      <label className="relative cursor-auto">
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="input mb-7"
          placeholder=" "
        />
        <span className="text-base font-[400] text-[#878787]/90 absolute left-0 transition duration-200 input__text">
          Enter Email
        </span>
        {errors.email && (
          <p className="text-xs font-sans text-[#ff2137] font-semibold absolute -bottom-5">
            This field is required and must be a valid email.
          </p>
        )}
      </label>

      <label className="relative cursor-auto">
        <input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          className="input"
          placeholder=" "
        />
        <span className="text-base font-[400] text-[#878787]/90 absolute left-0 transition duration-200 input__text">
          Enter Password
        </span>
        {errors.password && (
          <p className="text-xs font-sans text-[#ff2137] font-semibold">
            Password must be at least 8 characters long.
          </p>
        )}
      </label>

      <p className="w-[75%] md:w-full text-xs text-[#878787] mt-7">
        By continuing, you agree to Flipkart's{" "}
        <span className="text-[#2874f0]">Terms of Use</span> and
        <span className="text-[#2874f0]"> Privacy Policy</span> .
      </p>
      <button
        type="submit"
        className="w-[75%] h-[48px] md:w-full bg-[#fb641b] text-white text-sm rounded my-2 shadow-md">
        Signup
      </button>
      <button
        onClick={() => setAccount("login")}
        className="w-[75%] md:w-full h-[48px] bg-white shadow-md text-xs text-[#2874f0]">
        Existing User? Log in
      </button>
    </form>
  );
};

export default SignupForm;
