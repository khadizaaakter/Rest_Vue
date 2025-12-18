import { toast } from "vue3-toastify";

export const showNotification = (type, message) => {
  toast(message, {
    type: type,
    position: "top-right",
    autoClose: 1000,
  });
};
