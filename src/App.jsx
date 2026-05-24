import { BrowserRouter, Routes, Route } from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"
import Pendientes from "./pages/Pendientes"
import Historial from "./pages/Historial"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pendientes" element={<Pendientes />} />
          <Route path="historial" element={<Historial />} />
        </Route>
      </Routes>
  )
}
