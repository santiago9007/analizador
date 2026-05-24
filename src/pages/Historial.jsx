import HistoryTable from "../components/HistoryTable"

export default function Historial() {

  return (

    <>

      {/* HEADER */}
      <div className="mb-8">

        <div className="flex items-center justify-between flex-wrap gap-4">

          {/* TITLE */}
          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Historial
            </h1>

            <p className="text-slate-500 mt-2">
              Registro histórico de facturas gestionadas y guías generadas.
            </p>

          </div>

          {/* STATUS CARD */}
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
                bg-green-100
                text-green-700
                flex
                items-center
                justify-center
                text-xl
              "
            >
              🗂️
            </div>

            <div>

              <p className="text-sm font-semibold text-slate-800">
                Historial Operativo
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Facturas finalizadas aparecerán aquí automáticamente
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* INFO ALERT */}
      <div
        className="
          mb-8
          bg-blue-50
          border
          border-blue-100
          rounded-2xl
          p-5
        "
      >

        <div className="flex items-start gap-4">

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-blue-100
              text-blue-700
              flex
              items-center
              justify-center
              text-lg
              flex-shrink-0
            "
          >
            ℹ️
          </div>

          <div>

            <h3 className="text-sm font-semibold text-slate-800">
              Flujo Automático de Gestión
            </h3>

            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Una vez el operario valide el flete, registre la guía
              transportadora y marque la factura como finalizada,
              el sistema moverá automáticamente el registro hacia
              este historial operativo.
            </p>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <HistoryTable />

    </>

  )

}