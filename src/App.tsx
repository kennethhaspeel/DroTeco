import Home from "./pages/Home";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { SkeletonComponent } from "./components/SkeletonComponent";



function App() {
  return (
    <Suspense fallback={<SkeletonComponent />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
