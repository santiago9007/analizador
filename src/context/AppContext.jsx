import { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

export default function AppProvider({ children }) {

    const [pendingInvoices, setPendingInvoices] = useState([])

    const [historyInvoices, setHistoryInvoices] = useState([])

    const [freights, setFreights] = useState({})

    // Obtener facturas desde API
    const fetchInvoices = async () => {

        try {

            const response = await fetch("http://localhost:3000/api/facturas")

            const data = await response.json()

            setPendingInvoices(data)

        } catch (error) {

            console.error(error)

    }

}

    useEffect(() => {

        const loadingInvoices = async () => {
            await fetchInvoices()
        }
        loadingInvoices()
    }, [])

    const finalizeInvoice = (invoice) => {

        setHistoryInvoices(prev => [...prev, invoice])

        setPendingInvoices(prev =>
            prev.filter(item => item.id !== invoice.id)
        )

    }

    return (

        <AppContext.Provider
            value={{
                pendingInvoices,
                historyInvoices,
                setHistoryInvoices,
                finalizeInvoice,
                setPendingInvoices,
                freights,
                setFreights
            }}
        >

            {children}

        </AppContext.Provider>

    )

}