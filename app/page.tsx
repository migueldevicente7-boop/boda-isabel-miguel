export default function Home() {
  return (
    <main className="bg-[#f6f1eb] text-[#243746]">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* FOTO DE FONDO */}
        <div className="absolute inset-0 bg-[url('/foto-boda.JPEG')] bg-cover bg-center" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENIDO */}
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

          <a
            href="#info"
            className="inline-block mt-12 px-8 py-4 border border-[#f6f1eb] text-[#f6f1eb] uppercase tracking-[0.2em] text-sm hover:bg-[#f6f1eb] hover:text-[#243746] transition duration-500"
          >
            Confirmar asistencia
          </a>

        </div>
      </section>

      {/* INFORMACIÓN */}
      <section
        id="info"
        className="max-w-5xl mx-auto px-6 py-32 text-center"
      >

        <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-8">
          Nuestra boda
        </p>

        <h2 className="text-5xl mb-10 font-serif">
          Celebremos juntos un día inolvidable
        </h2>

        <p className="text-xl leading-10 text-[#5b6b76] max-w-3xl mx-auto">
          Después de tantos momentos compartidos, llega uno de los más importantes
          de nuestras vidas. Nos haría muchísima ilusión celebrar este día rodeados
          de quienes más queremos.
        </p>

      </section>

      {/* FECHA */}
      <section className="py-24 text-center bg-[#fffdf9]">

        <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-6">
          Fecha
        </p>

        <h2 className="text-6xl font-serif mb-8">
          26 · Septiembre · 2026
        </h2>

        <p className="text-xl text-[#5b6b76] max-w-2xl mx-auto leading-9">
          Después de la ceremonia celebraremos juntos un día inolvidable rodeados
          de nuestras familias y amigos.
        </p>

      </section>

      {/* CEREMONIA */}
      <section className="py-32 px-6">

        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-14 shadow-xl text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-6">
            Ceremonia
          </p>

          <h3 className="text-5xl font-serif mb-6">
            Capilla del Dulce Nombre de Jesús
          </h3>

          <p className="text-xl text-[#5b6b76] mb-10">
            Sevilla · Ceremonia religiosa
          </p>

          <button className="px-8 py-4 bg-[#243746] text-white uppercase tracking-[0.2em] text-sm rounded-full hover:opacity-90 transition">
            Ver ubicación
          </button>

        </div>

      </section>

      {/* CELEBRACIÓN */}
      <section className="pb-32 px-6">

        <div className="max-w-4xl mx-auto bg-[#243746] rounded-[40px] p-14 shadow-xl text-center text-white">

          <p className="uppercase tracking-[0.3em] text-sm text-[#d6c1a3] mb-6">
            Celebración
          </p>

          <h3 className="text-5xl font-serif mb-6">
            Hacienda Al-Yamanah
          </h3>

          <p className="text-xl text-[#d9e0e5] mb-10">
            Sanlúcar la Mayor · Cena y celebración
          </p>

          <button className="px-8 py-4 border border-white uppercase tracking-[0.2em] text-sm rounded-full hover:bg-white hover:text-[#243746] transition duration-500">
            Ver ubicación
          </button>

        </div>

      </section>

    </main>
  );
}
