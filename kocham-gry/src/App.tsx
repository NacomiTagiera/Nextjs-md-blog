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
const Csgo = lazy(() => import("./pages/CSGO/Csgo"));
const Hearthstone = lazy(() => import("./pages/Hearthstone/Hearthstone"));
const Home = lazy(() => import("./pages/Home/Home"));
const NBA = lazy(() => import("./pages/NBA/NBA"));
const PUBG = lazy(() => import("./pages/PUBG/Pubg"));
const StreetFighter = lazy(
  () => import("./pages/Street_Fighter/Street_Fighter")
);
const Tekken = lazy(() => import("./pages/Tekken/Tekken"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Call_of_Duty" element={<CoD />} />
      <Route path="CSGO" element={<Csgo />} />
      <Route path="Hearthstone" element={<Hearthstone />} />
      <Route path="NBA_2K" element={<NBA />} />
      <Route path="PUBG" element={<PUBG />} />
      <Route path="Street_Fighter" element={<StreetFighter />} />
      <Route path="Tekken" element={<Tekken />} />
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
