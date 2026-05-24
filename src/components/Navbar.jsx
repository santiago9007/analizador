export default function Navbar() {
  return (
    <div
      className="
        navbar
        h-16
        bg-white
        border-b
        border-slate-200
        px-6
        lg:hidden
      "
    >

      {/* MENU BUTTON */}
      <div className="flex-none">

        <label
          htmlFor="my-drawer"
          className="
            btn
            btn-square
            btn-ghost
            text-slate-700
            hover:bg-slate-100
            border-none
          "
        >
          ☰
        </label>

      </div>

      {/* TITLE */}
      <div className="flex-1">

        <h1 className="text-lg font-bold text-slate-800 tracking-wide">
          JALTECH
        </h1>

      </div>

      {/* STATUS */}
      <div className="flex items-center gap-2">

        <div className="
          w-2
          h-2
          rounded-full
          bg-green-500
        "></div>

        <span className="text-sm text-slate-500">
          Operativo
        </span>

      </div>

    </div>
  )
}