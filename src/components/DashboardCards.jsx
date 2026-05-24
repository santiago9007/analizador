import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function DashboardLayout() {

  const {

    pendingInvoices,

    historyInvoices,

    freights

  } = useContext(AppContext)

  // TOTALES
  const totalPending = pendingInvoices.length

  const totalHistory = historyInvoices.length

  // VALIDACIÓN
  const getValidation = (invoice) => {

  const freight =
    Number(invoice.valorFlete || 0)

  const total =
    Number(invoice.valor_factura || 0)

  if (!freight || !total) {
    return "Correcto"
  }

  const percentage =
    (total / freight) * 100

  if (percentage > 10) {
    return "Fuera"
  }

  return "Correcto"

}

  // FLETES FUERA DE RANGO
 const invalidFreights =
  pendingInvoices.filter(
    invoice =>
      getValidation(invoice) === "Fuera"
  ).length

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {/* CARD 1 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

        <p className="text-sm font-medium text-slate-500">
          Facturas pendientes
        </p>

        <div className="flex items-center justify-between mt-4">

          <h2 className="text-4xl font-bold text-slate-800">
            {totalPending}
          </h2>

          <div className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            Activas
          </div>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

        <p className="text-sm font-medium text-slate-500">
          Guías generadas
        </p>

        <div className="flex items-center justify-between mt-4">

          <h2 className="text-4xl font-bold text-slate-800">
            {totalHistory}
          </h2>

          <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Operativo
          </div>

        </div>

      </div>

      {/* CARD 3 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

        <p className="text-sm font-medium text-slate-500">
          Fletes fuera de rango
        </p>

        <div className="flex items-center justify-between mt-4">

          <h2 className="text-4xl font-bold text-slate-800">
            {invalidFreights}
          </h2>

          <div className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            Atención
          </div>

        </div>

      </div>

    </div>

  )

}