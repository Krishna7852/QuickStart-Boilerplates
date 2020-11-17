// @flow
import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  message: string;
};

/**
 * Toast component is to display toast messages.
 * @param props Message to diplay in Toast box.
 * ref: https://fkhadra.github.io/react-toastify/introduction/
 */
export const Toast = (props: Props) => {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
};
