import { Section } from "@/components/ui/Section";

export function QuoteFormSection() {
  return (
    <Section id="quote" className="pt-2 md:pt-6">
      <div className="mx-auto w-full max-w-5xl rounded-2xl bg-slate-100 px-4 py-8 text-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-8 md:px-12 md:py-12">
        <h2 className="text-center text-4xl font-bold leading-tight text-teal-700 sm:text-5xl md:text-6xl">
          ¿Arrancamos con tu próximo proyecto?
        </h2>
        <p className="mt-4 text-center text-lg text-slate-500">
          Los espacios marcados con asterisco (*) son obligatorios.
        </p>

        <form className="mt-8 space-y-4 md:mt-10" action="#">
          <input
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-xl text-slate-600 outline-none transition focus:border-teal-500"
            placeholder="Nombre *"
            type="text"
          />
          <input
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-xl text-slate-600 outline-none transition focus:border-teal-500"
            placeholder="Correo *"
            type="email"
          />

          <div className="grid gap-3 md:grid-cols-[130px_1fr]">
            <div className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-xl text-slate-600">🇨🇴 +57</div>
            <input
              className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-xl text-slate-600 outline-none transition focus:border-teal-500"
              placeholder="Teléfono *"
              type="tel"
            />
          </div>

          <input
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-xl text-slate-600 outline-none transition focus:border-teal-500"
            placeholder="Producto"
            type="text"
          />
          <input
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-xl text-slate-600 outline-none transition focus:border-teal-500"
            placeholder="Cantidad"
            type="text"
          />
          <textarea
            className="h-40 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-xl text-slate-600 outline-none transition focus:border-teal-500"
            placeholder="Mensaje *"
          />

          <div className="pt-2">
            <p className="text-3xl font-semibold text-slate-600">Documentos Adjuntos</p>
            <div className="mt-3 rounded-2xl border-2 border-dashed border-slate-300 bg-white/60 p-8 text-center text-lg text-slate-400">
              Arrastra archivos aquí o haz clic para cargar
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
