import { toast } from 'react-toastify'

const successToast = (message = "Add Todo Done!") => {
    return toast.success(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

const infoToast = (message = "info Toast") => {
    toast.info(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

const warnigToast = (message = "warnig Toast") => {
    toast.warn(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const errorToast = (message = "error Toast") => {
    toast.error(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export {
    successToast,
    infoToast,
    warnigToast,
    errorToast
}