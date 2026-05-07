export default function WeddingWebsite() {
  const texture = {
    backgroundImage:
      'radial-gradient(rgba(31,58,68,0.03) 1px, transparent 1px)',
    backgroundSize: '22px 22px',
  };

  const schedule = [
    {
      hora: '10:30',
      titulo: 'Salida desde Olivares',
      texto: 'Autobús desde el recinto ferial de Olivares hacia Sevilla',
    },
    {
      hora: 'Tras la ceremonia',
      titulo: 'Salida hacia Hacienda Al‑Yamanah',
      texto:
        'Dos autobuses saldrán desde Sevilla al finalizar la misa rumbo a Hacienda Al‑Yamanah',
    },
    {
      hora: '19:00',
      titulo: 'Primer regreso',
      texto:
        'Salida de autobuses desde la hacienda hacia Sevilla y Olivares',
    },
    {
      hora: 'Fin de fiesta',
      titulo: 'Último regreso',
      texto:
        'Últimos autobuses de vuelta con dirección Sevilla y Olivares',
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#F4EFE7] text-[#1F3A44] font-serif overflow-hidden"
      style={texture}
    >
      {/* Carta de apertura */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(31,58,68,0.06),transparent)]" />

        <div className="relative z-10 max-w-3xl bg-[#F8F4EE]/90 backdrop-blur-sm border border-[#DED2C5] rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(31,58,68,0.12)]">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#6B7B82] mb-8 text-center">
            Una carta para vosotros
          </p>

          <div className="w-20 h-px bg-[#9C8B76] mx-auto mb-10" />

          <h1 className="text-5xl md:text-8xl font-light text-center leading-none mb-12">
            Isabel
            <span className="mx-4 text-[#A89781]">Y</span>
            Miguel
          </h1>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#425961] max-w-2xl mx-auto text-center">
            <p>
              Después de tantos momentos compartidos, llega uno de los más
              importantes de nuestras vidas.
            </p>

            <p>
              Nos haría muchísima ilusión que formarais parte de este día tan
              especial y celebrarlo juntos rodeados de quienes más queremos.
            </p>

            <p>
              Aquí encontraréis toda la información necesaria para acompañarnos
              en esta aventura.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-14">
            <button className="px-8 py-4 rounded-full bg-[#1F3A44] text-[#F4EFE7] tracking-[0.15em] uppercase text-sm hover:scale-105 transition-transform shadow-xl">
              Confirmar asistencia
            </button>

            <button className="px-8 py-4 rounded-full border border-[#1F3A44]/20 bg-white/60 text-[#1F3A44] tracking-[0.15em] uppercase text-sm hover:bg-white transition-colors">
              Ver detalles
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#6B7B82] text-sm tracking-[0.25em] uppercase animate-bounce">
          Desliza
        </div>
      </section>

      {/* Fecha y lugar */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-[#E8DED2] rounded-[2rem] p-10 shadow-lg">
            <p className="uppercase tracking-[0.25em] text-sm mb-4 text-[#6D7D84]">
              Fecha
            </p>

            <h2 className="text-4xl mb-6">26 · Septiembre · 2026</h2>

            <p className="text-lg leading-relaxed text-[#435962]">
              Después de la ceremonia celebraremos juntos un día inolvidable
              rodeados de nuestras familias y amigos.
            </p>
          </div>

          <div className="bg-[#1F3A44] text-[#F4EFE7] rounded-[2rem] p-10 shadow-2xl">
            <p className="uppercase tracking-[0.25em] text-sm mb-4 text-[#C7B9A7]">
              Lugar
            </p>

            <h2 className="text-4xl mb-4">
              Capilla del Dulce Nombre de Jesús
            </h2>

            <p className="text-lg leading-relaxed text-[#D9D1C7] mb-4">
              Sevilla · Ceremonia religiosa
            </p>

            <div className="w-full h-px bg-white/10 my-6" />

            <h3 className="text-2xl mb-3 text-[#F4EFE7]">
              Hacienda Al‑Yamanah
            </h3>

            <p className="text-lg leading-relaxed text-[#D9D1C7]">
              Sanlúcar la Mayor · Celebración y convite
            </p>

            <button className="mt-8 border border-[#C7B9A7] px-6 py-3 rounded-full hover:bg-[#F4EFE7] hover:text-[#1F3A44] transition-colors">
              Ver ubicación
            </button>
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-24 px-6 bg-[#EFE7DD]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-[#6D7D84] mb-4">
              Organización del día
            </p>

            <h2 className="text-5xl">Horarios y Autobuses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 shadow-md hover:-translate-y-1 transition-transform"
              >
                <p className="text-3xl lg:text-4xl mb-6 text-[#1F3A44] leading-tight break-words">
                  {item.hora}
                </p>

                <h3 className="text-2xl mb-4 break-words leading-tight">
                  {item.titulo}
                </h3>

                <p className="text-[#5C6E75] leading-relaxed break-words">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-24 px-6 bg-[#F7F2EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-[#6D7D84] mb-4">
              Dress Code
            </p>

            <h2 className="text-5xl mb-6">Etiqueta clásica</h2>

            <p className="text-[#5C6E75] text-lg max-w-2xl mx-auto leading-relaxed">
              Nos encantará compartir este día con una estética elegante y
              atemporal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-lg border border-[#E6DBCF]">
              <p className="uppercase tracking-[0.25em] text-sm text-[#6D7D84] mb-6">
                Caballeros
              </p>

              <h3 className="text-3xl mb-6 text-[#1F3A44]">Chaqué</h3>

              <p className="text-[#5C6E75] leading-relaxed text-lg">
                El dress code para los hombres será chaqué tradicional.
              </p>
            </div>

            <div className="bg-[#1F3A44] rounded-[2rem] p-10 shadow-2xl text-[#F4EFE7]">
              <p className="uppercase tracking-[0.25em] text-sm text-[#C7B9A7] mb-6">
                Señoras
              </p>

              <h3 className="text-3xl mb-6">Elegancia clásica</h3>

              <p className="text-[#D9D1C7] leading-relaxed text-lg mb-4">
                Nos encantará veros con looks elegantes y sofisticados acordes
                a una celebración de día.
              </p>

              <p className="text-[#E8DED2] italic leading-relaxed text-lg">
                El color blanco queda reservado exclusivamente para la novia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmación */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-10 shadow-2xl border border-[#E2D8CC]">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.25em] text-sm text-[#6D7D84] mb-4">
              RSVP
            </p>

            <h2 className="text-5xl mb-4">Confirmación</h2>

            <p className="text-[#5C6E75] text-lg">
              Ayúdanos a organizarlo todo de la mejor manera posible.
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombre y apellidos"
              className="w-full border border-[#D8CEC2] bg-[#FAF8F5] rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#1F3A44]"
            />

            <div className="relative group">
              <select className="appearance-none w-full border border-[#D8CEC2] bg-[#FAF8F5]/80 backdrop-blur-sm rounded-full px-6 py-5 outline-none focus:ring-2 focus:ring-[#1F3A44] text-[#425961] shadow-sm hover:shadow-md transition-all duration-300">

              <option>¿Asistirás a la boda?</option>
              <option>Sí, allí estaré</option>
              <option>No podré asistir</option>
            </select>

              <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-[#7B8A90] group-hover:text-[#1F3A44] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative group">
              <select className="appearance-none w-full border border-[#D8CEC2] bg-[#FAF8F5]/80 backdrop-blur-sm rounded-full px-6 py-5 outline-none focus:ring-2 focus:ring-[#1F3A44] text-[#425961] shadow-sm hover:shadow-md transition-all duration-300">

              <option>¿Utilizarás el autobús?</option>
              <option>Sí</option>
              <option>No</option>
            </select>

              <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-[#7B8A90] group-hover:text-[#1F3A44] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <textarea
              placeholder="Alergias, intolerancias o información importante"
              rows={5}
              className="w-full border border-[#D8CEC2] bg-[#FAF8F5] rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#1F3A44]"
            />

            <button className="w-full py-4 rounded-2xl bg-[#1F3A44] text-[#F4EFE7] text-lg tracking-wide hover:opacity-90 transition-opacity shadow-xl">
              Enviar confirmación
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-[#DCCFC2]">
        <p className="tracking-[0.3em] uppercase text-sm text-[#6D7D84] mb-4">
          Gracias por formar parte de este día
        </p>

        <div className="w-16 h-px bg-[#9C8B76] mx-auto mb-6" />

        <p className="text-[#5C6E75]">
          Isabel y Miguel · Sevilla · 2026
        </p>
      </footer>
    </div>
  );
}
