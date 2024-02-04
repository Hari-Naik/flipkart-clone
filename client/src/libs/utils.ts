import { Bounce, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function successToast(title: string) {
  return toast.success(title, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
}
