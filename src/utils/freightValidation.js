// Validación logística de fletes

export function validateFreight(valorFactura, valorFlete) {

  // PORCENTAJE MÁXIMO PERMITIDO
  const porcentajePermitido = 10

  // CALCULAR PORCENTAJE ACTUAL
  const porcentaje =
  valorFactura > 0
    ? (valorFlete / valorFactura) * 100
    : 0

  // FLETE MUY ALTO
  if (porcentaje > porcentajePermitido) {

    return {

      status: "HIGH",

      color: "badge-error",

      message: "Superior"


    }

  }

  // FLETE SOSPECHOSAMENTE BAJO
  if (porcentaje < 5) {

    return {

      status: "LOW",

      color: "badge-warning",

      message: "Bajo"


    }

  }

  // CORRECTO
  return {

    status: "OK",

    color: "badge-success",

    message: "Optimo"


  }

}