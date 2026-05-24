import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

export default function HistoryTable() {

  const {

    historyInvoices,

    setHistoryInvoices

  } = useContext(AppContext)

  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  // ABRIR MODAL
  const openModal = (invoice) => {

    setSelectedInvoice(invoice)

    setIsModalOpen(true)

  }

  // CERRAR MODAL
  const closeModal = () => {

    setSelectedInvoice(null)

    setIsModalOpen(false)

  }

  // GUARDAR CAMBIOS
  const saveChanges = () => {

    setHistoryInvoices(prev =>

      prev.map(item =>

        item.id === selectedInvoice.id

          ? selectedInvoice

          : item

      )

    )

    closeModal()

  }

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        p-6
        shadow-sm
      "
    >

      {/* HEADER */}
      <div className="mb-6">

        <h2 className="text-xl font-bold text-slate-800">
          Historial de Facturas
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Facturas procesadas y gestionadas correctamente.
        </p>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="table text-sm">

          <thead>

            <tr className="text-slate-500 border-b border-slate-200">

              <th>Factura</th>
              <th>Cliente</th>
              <th>Ciudad</th>
              <th>Valor Factura</th>
              <th>Flete</th>
              <th>Guía</th>
              <th>Transportadora</th>
              <th>Fecha Gestión</th>
              <th>Acciones</th>

            </tr>

          </thead>

          <tbody>

            {

              historyInvoices.length === 0 ? (

                <tr>

                  <td
                    colSpan="9"
                    className="
                      text-center
                      py-10
                      text-slate-400
                    "
                  >

                    No hay registros en historial

                  </td>

                </tr>

              ) : (

                historyInvoices.map((invoice) => (

                  <tr
                    className="
                      font-semibold
                      text-slate-700
                    "
                    key={invoice.id}
                  >

                    <td className="text-slate-600">
                      {invoice.numero_factura}
                    </td>

                    <td className="text-slate-600">
                      {invoice.cliente}
                    </td>

                    <td className="text-slate-600">
                      {invoice.ciudad}
                    </td>

                    <td className="text-slate-600">
                      ${invoice.valor_factura.toLocaleString()}
                    </td>

                    <td className="text-slate-600">
                      ${(invoice.valorFlete || 0).toLocaleString()}
                    </td>

                    <td className="text-slate-600">
                      {invoice.guia || "Sin guía"}
                    </td>

                    <td className="text-slate-600">
                      {invoice.transportadora || "Sin transportadora"}
                    </td>

                    <td className="text-slate-600">

                      {
                        new Date(invoice.fecha_factura)
                          .toLocaleDateString("es-CO")
                      }

                    </td>

                    {/* BOTÓN EDITAR */}
                    <td>

                      <button
                        onClick={() => openModal(invoice)}
                        className="
                          btn
                          btn-sm
                          bg-blue-600
                          hover:bg-blue-700
                          text-white
                          border-none
                          rounded-xl
                        "
                      >

                        Editar

                      </button>

                    </td>

                  </tr>

                ))

              )

            }

          </tbody>

        </table>

      </div>

      {/* MODAL */}
      {

        isModalOpen && selectedInvoice && (

          <div
            className="
              fixed
              inset-0
              bg-black/40
              flex
              items-center
              justify-center
              z-50
            "
          >

            <div
              className="
                bg-white
                rounded-3xl
                shadow-2xl
                w-full
                max-w-xl
                p-8
                border
                border-slate-200
              "
            >

              {/* HEADER */}
              <div className="mb-8">

                <h2 className="text-2xl font-bold text-slate-800">
                  Editar Factura
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                  Corrige los datos de la gestión.
                </p>

              </div>

              {/* FORM */}
              <div className="space-y-6">

                {/* FLETE */}
                <div>

                  <label className="text-sm font-medium text-slate-600 mb-2 block">
                    Valor Flete
                  </label>

                  <input
                    type="number"

                    value={selectedInvoice.valorFlete || ""}

                    onChange={(e) => {

                      setSelectedInvoice({

                        ...selectedInvoice,

                        valorFlete: Number(e.target.value)

                      })

                    }}

                    className="
                      input
                      w-full
                      bg-white
                      text-slate-700
                      border-slate-200
                      focus:outline-none
                      focus:border-green-500
                    "
                  />

                </div>

                {/* GUÍA */}
                <div>

                  <label className="text-sm font-medium text-slate-600 mb-2 block">
                    Número Guía
                  </label>

                  <input
                    type="text"

                    value={selectedInvoice.guia || ""}

                    onChange={(e) => {

                      setSelectedInvoice({

                        ...selectedInvoice,

                        guia: e.target.value

                      })

                    }}

                    className="
                      input
                      w-full
                      bg-white
                      text-slate-700
                      border-slate-200
                      focus:outline-none
                      focus:border-blue-500
                    "
                  />

                </div>

                {/* TRANSPORTADORA */}
                <div>

                  <label className="text-sm font-medium text-slate-600 mb-2 block">
                    Transportadora
                  </label>

                  <select

                    value={selectedInvoice.transportadora || ""}

                    onChange={(e) => {

                      setSelectedInvoice({

                        ...selectedInvoice,

                        transportadora: e.target.value

                      })

                    }}

                    className="
                      select
                      w-full
                      bg-white
                      text-slate-700
                      border-slate-200
                      focus:outline-none
                      focus:border-green-500
                    "
                  >

                    <option value="">
                      Seleccionar
                    </option>

                    <option value="Interrapidisimo">
                      Interrapidísimo
                    </option>

                    <option value="Servientrega">
                      Servientrega
                    </option>

                    <option value="Coordinadora">
                      Coordinadora
                    </option>

                    <option value="Envia">
                      Envia
                    </option>

                    <option value="TCC">
                      TCC
                    </option>

                  </select>

                </div>

              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-4 mt-10">

                <button
                  onClick={closeModal}
                  className="
                    btn
                    bg-red-600
                    hover:bg-red-700
                    btn-outline
                    border-none
                    rounded-xl
                  "
                >

                  Cancelar

                </button>

                <button
                  onClick={saveChanges}
                  className="
                    btn
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    border-none
                    rounded-xl
                  "
                >

                  Guardar Cambios

                </button>

              </div>

            </div>

          </div>

        )

      }

    </div>

  )

}