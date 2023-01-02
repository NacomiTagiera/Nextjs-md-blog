import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min";

// layout
const RootLayout = lazy(() => import("./layouts/RootLayout"));

// pages
const CoD = lazy(() => import("./pages/CoD/CoD"));
const Hearthstone = lazy(() => import("./pages/Hearthstone/Hearthstone"));
const Home = lazy(() => import("./pages/Home/Home"));
const NBA = lazy(() => import("./pages/NBA/NBA"));
const StreetFighter = lazy(
  () => import("./pages/Street_Fighter/Street_Fighter")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Call_of_Duty" element={<CoD />} />
      <Route path="Hearthstone" element={<Hearthstone />} />
      <Route path="NBA_2K" element={<NBA />} />
      <Route path="Street_Fighter" element={<StreetFighter />} />
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
