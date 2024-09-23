import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

import AdminLogin from "../pages/AdminLogin";
import AdminLayout from "../layouts/AdminLayout";

const CustomersList = lazy(() => import("../pages/CustomersList"));

export default function Routes() {
  const router = useRoutes([
    {
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <AdminLogin />
        </Suspense>
      ),
      path: "/admin-login",
    },
    {
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <AdminLayout />
        </Suspense>
      ),
      path: "/admin",
      children: [
        {
          element: <CustomersList />,
          path: "/admin/customers/list",
        },
      ],
    },
  ]);

  return router;
}
