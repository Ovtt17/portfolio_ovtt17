import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import NotFound from "@/pages/NotFound"
import LocalizedLayout from "@/layouts/LocalizedLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect / to /en by default */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Routes with language prefix */}
        <Route path="/:lang/*" element={<LocalizedLayout />} />

        {/* Optional: fallback in case nothing matches */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
