import { toast } from "react-toastify";

const configToast = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

const toastMessage = (message, status) => {
  switch (status) {
    case "error":
      toast.error(`${message}`, configToast);
      break;
    case "warning":
      toast.warn(`${message}`, configToast);
      break;
    case "normal":
      toast(`${message}`, configToast);
      break;
    default:
      toast(`${message}`, configToast);
  }
};

export default toastMessage;
