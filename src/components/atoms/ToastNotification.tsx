import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastNotification = () => (
  <ToastContainer
    position='top-right'
    autoClose={2500}
    aria-live='polite'
    closeButton
    closeOnClick
    draggable
    hideProgressBar
    newestOnTop
    role='alert'
    theme='colored'
  />
);
