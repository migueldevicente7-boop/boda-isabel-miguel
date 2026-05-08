export default function Home() {
  return (
    <main className="bg-[#f6f1eb] text-[#243746] animate-fadeIn">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* FOTO DE FONDO */}
        <div className="absolute inset-0 bg-[url('/foto-boda.JPEG')] bg-cover bg-center" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENIDO */}
        <div className="relative z-10 text-center px-6 text-white">

          <p className="uppercase tracking-[0.4em] text-sm text-[#f6f1eb] mb-8">
            Una celebración inolvidable
          </p>

          <h1 className="text-7xl md:text-9xl leading-none">
            Isabel
          </h1>

          <p className="text-4xl my-4 text-[#d6c1a3]">
            y
          </p>

          <h1 className="text-7xl md:text-9xl leading-none">
            Miguel
          </h1>

          <div className="mt-10">
            <p className="tracking-[0.3em] uppercase text-sm">
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

      {/* INFO */}
      <section
        id="info"
        className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 fade-up"
      >

        {/* CEREMONIA */}
        <div className="bg-white rounded-[30px] shadow-xl p-10 hover:-translate-y-1 transition duration-500 fade-up fade-delay-1">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-4">
            Ceremonia
          </p>

          <h2 className="text-4xl mb-6">
            Capilla del Dulce Nombre de Jesús
          </h2>

          <p className="text-lg leading-8 text-[#5b6b76]">
            Sevilla
            <br />
            12:00 horas
          </p>
        </div>

        {/* CELEBRACIÓN */}
        <div className="bg-white rounded-[30px] shadow-xl p-10 hover:-translate-y-1 transition duration-500 fade-up fade-delay-2">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-4">
            Celebración
          </p>

          <h2 className="text-4xl mb-6">
            Hacienda Al-Yamanah
          </h2>

          <p className="text-lg leading-8 text-[#5b6b76]">
            Sanlúcar la Mayor
          </p>
        </div>

        {/* AUTOBUSES */}
        <div className="bg-white rounded-[30px] shadow-xl p-10 md:col-span-2 hover:-translate-y-1 transition duration-500 fade-up fade-delay-3">

          <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-8">
            Autobuses
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* OLIVARES */}
            <div className="border border-[#ece7df] rounded-2xl p-6">
              <h3 className="text-2xl mb-4">
                Olivares
              </h3>

              <p className="text-[#5b6b76] leading-8">
                Salida desde el recinto ferial de Olivares
                <br />
                10:30 horas
              </p>
            </div>

            {/* SEVILLA */}
            <div className="border border-[#ece7df] rounded-2xl p-6">
              <h3 className="text-2xl mb-4">
                Sevilla
              </h3>

              <p className="text-[#5b6b76] leading-8">
                Salida al término de la ceremonia
                <br />
                hacia Hacienda Al-Yamanah
              </p>
            </div>

            {/* REGRESO */}
            <div className="border border-[#ece7df] rounded-2xl p-6">
              <h3 className="text-2xl mb-4">
                Regreso
              </h3>

              <p className="text-[#5b6b76] leading-8">
                19:00 horas
                <br />
                Regreso a Sevilla y Olivares
                <br /><br />
                Nuevas salidas al finalizar la fiesta
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* RSVP */}
      <section className="bg-[#243746] text-white py-24 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.4em] text-sm text-[#d6c1a3] mb-6">
            Confirmación
          </p>

          <h2 className="text-5xl mb-12">
            Nos encantará celebrar este día contigo
          </h2>

          <form className="grid gap-6 text-left">

            <input
              type="text"
              placeholder="Nombre y apellidos"
              className="p-4 rounded-xl bg-white text-black"
            />

            <select className="p-4 rounded-xl text-black">
              <option>¿Asistirás a la boda?</option>
              <option>Sí asistiré</option>
              <option>No podré asistir</option>
            </select>

            <select className="p-4 rounded-xl text-black">
              <option>¿Necesitarás autobús?</option>
              <option>Sí</option>
              <option>No</option>
            </select>

            <textarea
              placeholder="Alergias, intolerancias o mensaje"
              rows={4}
              className="p-4 rounded-xl text-black"
            />

            <button
              className="bg-[#d6c1a3] text-[#243746] py-4 rounded-xl uppercase tracking-[0.2em] hover:opacity-80 transition"
            >
              Enviar confirmación
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}
