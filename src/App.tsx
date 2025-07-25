import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { SectionProvider } from "@/context/SectionContext"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import SurveyApp from "./pages/projects/SurveyApp"
import WhatsAppClone from "./pages/projects/WhatsAppClone"
import { useEffect } from "react"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null
}

function App() {
  return (
    <SectionProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects/survey-app" element={<SurveyApp />} />
          <Route path="/projects/whatsapp-clone" element={<WhatsAppClone />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SectionProvider>
  )
}

export default App
