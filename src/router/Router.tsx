import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import MainLayout from "../components/MainLayout.tsx";
import Loading from "../pages/Loading.tsx";

// Lazy load components
const App = lazy(() => import("../App.tsx"));
const ScrollControlPage = lazy(() => import("../pages/ScrollSnapPage.tsx"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/scroll-snap",
        element: (
          <Suspense fallback={<Loading />}>
            <ScrollControlPage />
          </Suspense>
        ),
      },
    ],
  },
]);
