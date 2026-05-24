import PendingTable from "../components/PendingTable"

export default function Pendientes() {

  return (

    <>

      {/* HEADER */}
      <div className="mb-8">

        <div className="flex items-center justify-between flex-wrap gap-4">

          {/* TITLE */}
          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Facturas Pendientes
            </h1>

            <p className="text-slate-500 mt-2">
              Gestión operativa y validación de fletes transportadores.
            </p>

          </div>

          {/* STATUS */}
          <div
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              px-5
              py-4
              shadow-sm
              flex
              items-center
              gap-4
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-yellow-100
                text-yellow-700
                flex
                items-center
                justify-center
                text-xl
              "
            >
              🚚
            </div>

            <div>

              <p className="text-sm font-semibold text-slate-800">
                Cola Operativa
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Facturas pendientes de validación
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* INFO PANEL */}
      <div
        className="
          mb-8
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

            <h2 className="text-lg font-bold text-slate-800">
              Flujo Operativo Automatizado
            </h2>

            <p className="text-sm text-slate-500 mt-3 max-w-3xl leading-relaxed">
              El sistema monitorea automáticamente las facturas generadas
              desde G&G y valida el porcentaje del flete respecto al valor
              total de la factura. Una vez registrada la guía transportadora,
              el operario podrá finalizar el proceso y mover el registro
              automáticamente al historial.
            </p>

          </div>

          {/* STATUS BADGES */}
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
              Validación Automática
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
              Control Logístico
            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <PendingTable />

    </>

  )

}