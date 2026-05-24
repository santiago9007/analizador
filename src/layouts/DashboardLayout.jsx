import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function DashboardLayout() {

  return (

    <div
      className="
        min-h-screen
        bg-[#f8fafc]
      "
    >

      {/* NAVBAR SUPERIOR */}
      <Sidebar />

      {/* MAIN */}
      <main
        className="
          p-4
          md:p-6
          lg:p-8
        "
      >

        {/* CONTENEDOR */}
        <div className="w-full">

          <Outlet />

        </div>

      </main>

    </div>

  )

}