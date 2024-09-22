import { FC } from "react";

import AdminSidebar from "../components/AdminSidebar";

import { Outlet } from "react-router-dom";

const AdminLayout: FC = () => {
  return (
    <div className="flex w-[100%]">
      <AdminSidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
