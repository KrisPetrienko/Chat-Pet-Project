import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Notification() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  )
}