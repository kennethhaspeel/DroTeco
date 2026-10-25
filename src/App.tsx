import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { SkeletonComponent } from "./components/SkeletonComponent";
const NotFound = lazy(() => import("./pages/NotFound"));
const Fotogrammetrie = lazy(() => import("./pages/Fotogrammetrie"));
const Thermografie = lazy(() => import("./pages/Thermografie"));
const GebouwInspecties = lazy(() => import("./pages/GebouwInspecties"));
const Luchtfotografie = lazy(() => import("./pages/Luchtfotografie"));
const Hulpdiensten = lazy(() => import("./pages/Hulpdiensten"));
const Contact = lazy(() => import("./pages/Contact"));



function App() {
  return (
    <Suspense fallback={<SkeletonComponent />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fotogrammetrie" element={<Fotogrammetrie />} />
          <Route path="/thermografie" element={<Thermografie />} />
          <Route path="/gebouwinspecties" element={<GebouwInspecties />} />
          <Route path="/luchtfotografie" element={<Luchtfotografie />} />
          <Route path="/hulpdiensten" element={<Hulpdiensten />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
