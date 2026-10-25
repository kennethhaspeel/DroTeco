import Home from "./pages/Home";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { SkeletonComponent } from "./components/SkeletonComponent";
import NotFound from "./pages/NotFound";
import Fotogrammetrie from "./pages/Fotogrammetrie";
import Thermografie from "./pages/Thermografie";
import GebouwInspecties from "./pages/GebouwInspecties";
import Luchtfotografie from "./pages/Luchtfotografie";
import Hulpdiensten from "./pages/Hulpdiensten";
import { Contact } from "lucide-react";



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
