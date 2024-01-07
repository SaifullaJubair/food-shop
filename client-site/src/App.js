import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      <h1 className="text-3xl">test</h1>
      <button className="btn-primary">Button</button>
    </div>
  );
}

export default App;
