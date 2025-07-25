import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { SectionProvider } from "@/context/SectionContext"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import { useEffect } from "react"
import ProjectPageLayout from "./layouts/ProjectPageLayout"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <SectionProvider>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPageLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SectionProvider>
    </BrowserRouter>
  )
}

export default App
