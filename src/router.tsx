import { Navigate, RouteObject } from "react-router-dom";

import A from "./pages/A.page";
import B from "./pages/B.page";
import C from "./pages/C.page";
import D from "./pages/D.page";
import Layout from "./components/Layout";
import ErrorPage from "./pages/Error.page";

export const PARE_ROUTES = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
} as const;

const router: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // Default
        path: "/",
        element: <Navigate replace to={`/${PARE_ROUTES["A"]}`} />,
      },
      {
        path: `/${PARE_ROUTES["A"]}`,
        element: <A />,

        /**
         * <A /> 에서 error 객체를 받아낼 수 없다.
         * 상위 계층에서 잡아낼 수 있을까.
         */
        // errorElement: <ErrorPage />,
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
function NotFoundPage() {
  return <div>페이지를 찾을 수 없어요.</div>;
}

export default router;
