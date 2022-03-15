import { toast } from "react-toastify";

const toastMessage = (message) => {
  return toast(`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export default toastMessage;
