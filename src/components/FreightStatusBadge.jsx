export default function FreightStatusBadge({ validation }){
    const statusStyles = {
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        error: "bg-red-100 text-red-700"
    }
    return(
        <div className={`
        inline-flex 
        items-center 
        justify-center
        px-3 
        py-1 
        rounded-full 
        text-xs 
        font-semibold 
        tracking-wide
        ${statusStyles[validation.type]}`}>
            {validation.mesagge}
        </div>
    )
}