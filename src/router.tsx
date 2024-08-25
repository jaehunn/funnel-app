import { Navigate, Outlet, RouteObject } from "react-router-dom";

import A from "./pages/A.page";
import B from "./pages/B.page";
import C from "./pages/C.page";
import D from "./pages/D.page";

export const PARE_ROUTES = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
} as const;

const router: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        // Default
        path: "/",
        element: <Navigate replace to={`/${PARE_ROUTES["A"]}`} />,
      },
      {
        path: `/${PARE_ROUTES["A"]}`,
        element: <A />,
        errorElement: <ErrorPage />,
      },
      {
        path: `/${PARE_ROUTES["B"]}`,
        element: <B />,
        errorElement: <ErrorPage />,
      },
      {
        path: `/${PARE_ROUTES["C"]}`,
        element: <C />,
        errorElement: <ErrorPage />,
      },
      {
        path: `/${PARE_ROUTES["D"]}`,
        element: <D />,
        errorElement: <ErrorPage />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

// TODO:
function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// TODO:
function ErrorPage() {
  return <div>에러가 발생했어요.</div>;
}

// TODO:
function NotFoundPage() {
  return <div>페이지를 찾을 수 없어요.</div>;
}

export default router;
