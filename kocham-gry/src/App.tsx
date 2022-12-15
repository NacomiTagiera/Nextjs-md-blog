import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min";

const CoD = lazy(() => import("./pages/CoD/CoD"));
const Home = lazy(() => import("./pages/Home/Home"));
const RootLayout = lazy(() => import("./layouts/RootLayout"));
const NBA = lazy(() => import("./pages/NBA/NBA"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Call_of_Duty" element={<CoD />} />
      <Route path="NBA_2K" element={<NBA />} />
    </Route>
  )
);

export default function App() {
  return (
    <Suspense fallback={<h1 className="text-center text-white">Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
