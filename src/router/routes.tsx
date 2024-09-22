import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

import AdminLogin from "../pages/AdminLogin";
import AdminLayout from "../layouts/AdminLayout";

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
    },
  ]);

  return router;
}
