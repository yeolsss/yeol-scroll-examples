import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import MainLayout from "../components/MainLayout.tsx";
import Loading from "../pages/Loading.tsx";

// Lazy load components
const App = lazy(() => import("../App.tsx"));

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
    ],
  },
]);
