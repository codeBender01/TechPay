import { FC } from "react";

import AdminSidebar from "../components/AdminSidebar";

import { Outlet } from "react-router-dom";

const AdminLayout: FC = () => {
  return (
    <div className="flex w-[100%]">
      <AdminSidebar />
      <div className="max-h-[100vh] overflow-y-auto flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
