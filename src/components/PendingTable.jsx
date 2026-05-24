import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { validateFreight } from "../utils/freightValidation"

export default function PendingTable() {

  const {
    pendingInvoices,
    finalizeInvoice,
    setPendingInvoices,
    freights,
    setFreights
  } = useContext(AppContext)

  const data = pendingInvoices



  const handleFreightChange = (id, value) => {

  console.log(id, value)

  setFreights(prev => ({

    ...prev,

    [id]: value

  }))

  setPendingInvoices(prev => {

    console.log(prev)

    return prev.map(invoice =>

      Number(invoice.id) === Number(id)

        ? {
            ...invoice,
            valorFlete: Number(value)
          }

        : invoice

    )

  })

}

  const getValidation = (invoice) => {
    const freight = Number(freights[invoice.id]) || 0
    return validateFreight(invoice.valor_factura, freight)
  }


  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        shadow-sm
        p-6
      "
    >

      {/* HEADER */}
      <div className="mb-6">

        <h2 className="text-xl font-bold text-slate-800">
          Facturas Pendientes
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Facturas detectadas automáticamente desde el sistema G&G.
        </p>

      </div>

      {
        data.length === 0 ? (

          /* EMPTY STATE */

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-24
              border
              border-dashed
              border-slate-200
              rounded-2xl
              bg-slate-50/60
            "
          >

            {/* ICON */}
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                text-4xl
                mb-6
              "
            >
              🚚
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-slate-700">
              No hay facturas pendientes
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-slate-500 text-center mt-3 max-w-lg leading-relaxed">
              Las facturas facturadas sin guía aparecerán aquí automáticamente
              cuando el sistema detecte nuevos registros desde G&G.
            </p>

            {/* STATUS */}
            <div
              className="
                mt-6
                px-4
                py-2
                rounded-full
                bg-green-100
                text-green-700
                text-sm
                font-medium
              "
            >
              Sistema en espera de sincronización
            </div>

            {/* PROCESS FLOW */}
            <div className="mt-10 grid md:grid-cols-3 gap-4 w-full max-w-4xl">

              {/* STEP 1 */}
              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-5
                  text-left
                "
              >

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
                    font-bold
                    mb-4
                  "
                >
                  1
                </div>

                <p className="text-sm font-semibold text-slate-800">
                  Validar Flete
                </p>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  El sistema calcula automáticamente el porcentaje del flete
                  respecto al valor total de la factura.
                </p>

              </div>

              {/* STEP 2 */}
              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-5
                  text-left
                "
              >

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-yellow-100
                    text-yellow-700
                    flex
                    items-center
                    justify-center
                    font-bold
                    mb-4
                  "
                >
                  2
                </div>

                <p className="text-sm font-semibold text-slate-800">
                  Registrar Guía
                </p>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  El operario registra manualmente el número de guía de la
                  transportadora.
                </p>

              </div>

              {/* STEP 3 */}
              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-5
                  text-left
                "
              >

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-green-100
                    text-green-700
                    flex
                    items-center
                    justify-center
                    font-bold
                    mb-4
                  "
                >
                  3
                </div>

                <p className="text-sm font-semibold text-slate-800">
                  Finalizar Gestión
                </p>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Al marcar el checkbox, la factura desaparece automáticamente
                  y pasa al historial de registros gestionados.
                </p>

              </div>

            </div>

          </div>

        ) : (

          /* TABLE */

          <div className="overflow-x-auto">

            <table className="table">

              <thead>

                <tr className="text-slate-500 border-b border-slate-200">

                  <th>Factura</th>
                  <th>Cliente</th>
                  <th>Ciudad</th>
                  <th>Fecha</th>
                  <th>Valor Factura</th>
                  <th>Flete</th>
                  <th>Estado</th>
                  <th>Guía</th>
                  <th>Transportadora</th>
                  <th>Enviar</th>

                </tr>

              </thead>

              <tbody>

                {data.map((invoice) => (

                  <tr
                    key={invoice.id}
                    className="hover:bg-slate-50 transition-all"
                  >

                    <td className="font-semibold text-slate-700">
                      {invoice.numero_factura}
                    </td>

                    <td className="text-slate-600">
                      {invoice.cliente}
                    </td>

                    <td className="text-slate-600">
                      {invoice.ciudad}
                    </td>

                    <td className="text-slate-500">
                      {new Date(invoice.fecha_factura)
                        .toLocaleDateString("es-CO")}
                    </td>

                    <td className="font-medium text-slate-700">
                      ${invoice.valor_factura.toLocaleString()}
                    </td>

                    {/* FLETE */}
                    <td>

                      <input
                        type="number"
                        value={freights[invoice.id] || ""}
                        onChange={(e) => {
                          handleFreightChange(invoice.id, e.target.value)
                        }}
                        className="
                          input
                          input-sm
                          w-25
                          bg-white
                          border-slate-200
                          focus:outline-none
                          focus:border-green-500
                          text-slate-700
                        "
                        required
                      />

                    </td>

                    {/* ESTADO */}
                    <td>

                      <div className={`badge ${getValidation(invoice).color}`}>
                        {getValidation(invoice).message}
                      </div>

                    </td>

                    {/* GUÍA */}

                   <td>
                    <input type="text" 
                      value={invoice.guia || ""}
                      onChange={(e) => {
                        setPendingInvoices(prev =>
                          prev.map(item => 
                            item.id === invoice.id
                            ?
                            {
                              ...item,
                              guia: e.target.value
                            } : item
                          )
                        )
                      }}
                      className="
                          input
                          input-sm
                          w-25
                          bg-white
                          border-slate-200
                          focus:outline-none
                          focus:border-green-500
                          text-slate-700
                        "
                    />
                   </td>

                   <td>
                    <select value={invoice.transportadora || ""}
                    onChange={(e) => {
                      setPendingInvoices(prev => 
                        prev.map(item =>
                          item.id === invoice.id
                          ?
                          {
                            ...item,
                            transportadora: e.target.value
                          }: item
                        )
                      )
                    }}
                    className="
                    select
                    select-sm
                    w-40
                    bg-white
                    border-slate-200
                    focus:outline-none
                    focus:border-gree-500
                    text-slate-700
                    "
                    >
                      <option value="">
                        Seleccionar
                      </option>

                      <option value="Interrapidisimo">
                        Interrapidisimo
                      </option>

                      <option value="Envia">
                        Envia
                      </option>

                      <option value="Veloenvios">
                        Veloenvios
                      </option>

                      <option value="Servientrega">
                        Servientrega
                      </option>

                      <option value="Asuenvios">
                        Asuenvios
                      </option>

                      <option value="Proeslog">
                        Proeslog
                      </option>

                      <option value="Servientrega">
                        Servientrega
                      </option>

                      <option value="Cootranstame">
                        Cootranstame
                      </option>

                    </select>
                   </td>

                    {/* CHECKBOX */}
                    <td>

                      <input
                        type="checkbox"
                        className="checkbox checkbox-success checkbox-sm"
                        onChange={() => {
                          const freight = Number(freights[invoice.id])


                          if(!freight || freight <= 0){
                            alert("Debes ingresar un valor de flete")
                            return
                          }
                          if(!invoice.guia){
                            alert("Debes ingresar el número de la guia")
                          }

                          if(!invoice.transportadora){
                            alert("Debes escoger una transportadora")
                          }
                          finalizeInvoice({
                            ...invoice, valorFlete: freight
                          })
                        }}
                      />

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )
      }

    </div>

  )

}