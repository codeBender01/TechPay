import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

import AdminLogin from "../pages/AdminLogin";
import AdminLayout from "../layouts/AdminLayout";

const CustomersList = lazy(() => import("../pages/CustomersList"));
const UserInfo = lazy(() => import("../pages/UserInfo"));
const StoresList = lazy(() => import("../pages/StoresList"));
const StoresEdit = lazy(() => import("../pages/StoresEdit"));
const ProductsList = lazy(() => import("../pages/ProductsList"));
const AddProduct = lazy(() => import("../pages/AddProduct"));

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
        {
          element: <UserInfo />,
          path: "/admin/customers/edit",
        },
        {
          element: <StoresList />,
          path: "/admin/stores/list",
        },
        {
          element: <StoresEdit />,
          path: "/admin/stores/edit",
        },
        {
          element: <ProductsList />,
          path: "/admin/products/list",
        },
        {
          element: <AddProduct />,
          path: "/admin/products/add",
        },
      ],
    },
  ]);

  return router;
}
