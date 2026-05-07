export default function Home() {
  return (
    <main className="bg-[#f6f1eb] text-[#243746]">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Fondo */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[0.4em] text-sm text-[#f6f1eb] mb-8">
            Una celebración inolvidable
          </p>

          <h1 className="text-[#f6f1eb] text-7xl md:text-9xl leading-none font-serif">
            Isabel
          </h1>

          <p className="text-[#d6c1a3] text-4xl my-4 font-light">
            y
          </p>

          <h1 className="text-[#f6f1eb] text-7xl md:text-9xl leading-none font-serif">
            Miguel
          </h1>

          <div className="mt-10">
            <p className="text-[#f6f1eb] tracking-[0.3em] uppercase text-sm">
              26 · Septiembre · 2026
            </p>
          </div>

          <button className="mt-12 px-8 py-4 border border-[#f6f1eb] text-[#f6f1eb] uppercase tracking-[0.2em] text-sm hover:bg-[#f6f1eb] hover:text-[#243746] transition duration-500">
            Confirmar asistencia
          </button>

        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-8">
          Nuestra boda
        </p>

        <h2 className="text-5xl mb-10 font-serif">
          Celebremos juntos un día inolvidable
        </h2>

        <p className="text-xl leading-10 text-[#5b6b76]">
          Después de tantos momentos compartidos, llega uno de los más importantes de nuestras vidas.
          Nos haría muchísima ilusión celebrar este día rodeados de quienes más queremos.
        </p>

      </section>

    </main>
  );
}
