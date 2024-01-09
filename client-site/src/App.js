import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
