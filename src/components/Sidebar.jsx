import { NavLink } from "react-router-dom"
import jaltech from "../assets/jaltech-.png"

export default function Sidebar() {

  const linkClass = ({ isActive }) => `
    rounded-xl
    px-4
    py-2
    transition-all
    duration-200
    flex
    items-center
    gap-2
    text-sm
    font-medium
    ${
      isActive
        ? "bg-green-100 text-green-700"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
    }
  `

  return (

    <header
      className="
        w-full
        bg-white
        border-b
        border-slate-200
        shadow-sm
        sticky
        top-0
        z-50
      "
    >

      <div
        className="
          px-6
          py-4
          flex
          items-center
          justify-between
          gap-6
        "
      >

        {/* IZQUIERDA */}
        <div className="flex items-center gap-4">

          {/* LOGO */}
          <img
            src={jaltech}
            alt="Jaltech"
            className="w-28 object-contain"
          />

          {/* INFO */}
          <div>

            <h2 className="text-lg font-bold text-slate-800">
              Jaltech Logistics
            </h2>

            <p className="text-sm text-slate-500">
              Sistema de validación de fletes
            </p>

          </div>

        </div>

        {/* DERECHA */}
        <nav className="flex items-center gap-2">

          <NavLink to="/" className={linkClass}>
            <span>📊</span>
            Dashboard
          </NavLink>

          <NavLink to="/pendientes" className={linkClass}>
            <span>🚚</span>
            Pendientes
          </NavLink>

          <NavLink to="/historial" className={linkClass}>
            <span>🗂️</span>
            Historial
          </NavLink>

        </nav>

      </div>

    </header>

  )

}