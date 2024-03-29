import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 4000,
    });
};

export const showErrorToast = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 4000,
    });
};