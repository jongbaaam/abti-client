import { Outlet } from "react-router-dom";

import SideBarProject from "../SideBarProject/SideBarProject";
import SideBar from "../SideBar/SideBar";

export default function Dashboard() {
  return (
    <div className="h-container-height text-text-color-gray">
      <main className="w-full h-full flex">
        <SideBar />
        <SideBarProject />
        <Outlet />
      </main>
    </div>
  );
}
