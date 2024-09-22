import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

import AdminLogin from "../pages/AdminLogin";

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
  ]);

  return router;
}
