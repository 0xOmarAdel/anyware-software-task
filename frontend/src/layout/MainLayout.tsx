import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="grow">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
