import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SectionProvider } from "@/context/SectionContext"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <SectionProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SectionProvider>
  )
}

export default App
