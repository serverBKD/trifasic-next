import FormKit from "@/components/FormKit"
export default function page() {

  return (
    <section className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center">
      <article className="px-2 py-5 text-center rounded-lg bg-slate-500">
        <h1>Cotiza tus Combos de Seguridad</h1>
        <FormKit />
        <p>Kit Cámaras</p>
      </article>
    </section>
  )
}
