import DashboardCards from "../components/DashboardCards"

export default function Dashboard() {

  return (

    <>

      {/* HEADER */}
      <div className="mb-8">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
              Panel general de monitoreo y validación logística.
            </p>

          </div>

          {/* STATUS */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-3
              bg-white
              border
              border-slate-200
              rounded-2xl
              px-5
              py-3
              shadow-sm
            "
          >

            <div
              className="
                w-3
                h-3
                rounded-full
                bg-green-500
              "
            ></div>

            <div>

              <p className="text-sm font-semibold text-slate-700">
                Sistema Operativo
              </p>

              <p className="text-xs text-slate-500">
                Sincronización activa con G&G
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* KPI CARDS */}
      <DashboardCards />

      {/* QUICK INFO */}
      <div
        className="
          mt-8
          bg-white
          border
          border-slate-200
          rounded-2xl
          p-6
          shadow-sm
        "
      >

        <div className="flex items-start justify-between flex-wrap gap-6">

          {/* LEFT */}
          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Estado General del Sistema
            </h2>

            <p className="text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
              El sistema monitorea automáticamente las facturas generadas
              desde G&G para validar costos de flete, detectar anomalías
              operativas y gestionar el flujo de guías transportadoras.
            </p>

          </div>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3">

            <div
              className="
                px-4
                py-2
                rounded-full
                bg-green-100
                text-green-700
                text-sm
                font-medium
              "
            >
              Monitoreo Activo
            </div>

            <div
              className="
                px-4
                py-2
                rounded-full
                bg-blue-100
                text-blue-700
                text-sm
                font-medium
              "
            >
              Integración G&G
            </div>

            <div
              className="
                px-4
                py-2
                rounded-full
                bg-yellow-100
                text-yellow-700
                text-sm
                font-medium
              "
            >
              Validación Automática
            </div>

          </div>

        </div>

      </div>

    </>

  )

}