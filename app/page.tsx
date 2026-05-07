"use client";

import { useState } from "react";

export default function WeddingWebsite() {
  const [opened, setOpened] = useState(false);

  const buses = [
    {
      hora: "10:30",
      titulo: "Salida desde Olivares",
      texto:
        "Autobús desde el recinto ferial de Olivares hacia Sevilla.",
    },
    {
      hora: "Tras la ceremonia",
      titulo: "Salida hacia Hacienda Al-Yamanah",
      texto:
        "Dos autobuses saldrán desde Sevilla al finalizar la misa rumbo a la hacienda.",
    },
    {
      hora: "19:00",
      titulo: "Primer regreso",
      texto:
        "Un autobús vuelve hacia Sevilla y otro hacia Olivares.",
    },
    {
      hora: "Fin de fiesta",
      titulo: "Último regreso",
      texto:
        "Últimos autobuses de vuelta con dirección Sevilla y Olivares.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F0E8] text-[#1E3842] overflow-x-hidden">
      {/* Fondo */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#1E3842 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3842]/10 to-transparent" />

        <div className="relative z-10 max-w-xl">
          <p className="uppercase tracking-[0.4em] text-xs text-[#425961] mb-8">
            Una carta para vosotros
          </p>

          <h1 className="text-6xl md:text-7xl font-serif leading-none mb-6">
            Isabel
            <span className="block text-[#8B7765] text-4xl md:text-5xl my-2">
              y
            </span>
            Miguel
          </h1>

          <p className="text-[#5B6B72] leading-8 text-lg mb-14">
            Después de tantos momentos compartidos, llega uno de los más
            importantes de nuestras vidas.
          </p>

          {!opened ? (
            <button
              onClick={() => setOpened(true)}
              className="border border-[#1E3842] px-10 py-4 rounded-full tracking-[0.2em] uppercase text-sm hover:bg-[#1E3842] hover:text-white transition-all duration-500"
            >
              Abrir invitación
            </button>
          ) : (
            <div className="animate-fadeIn space-y-20 mt-20">
              {/* INTRO */}
              <section className="bg-[#FAF7F2]/80 backdrop-blur-sm rounded-[40px] p-10 shadow-xl border border-[#E6DDD2]">
                <p className="leading-9 text-[#4B5C63] text-lg">
                  Nos haría muchísima ilusión que formarais parte de este día
                  tan especial y celebrar juntos rodeados de quienes más
                  queremos.
                </p>
              </section>

              {/* FECHA */}
              <section className="space-y-8">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-[#7A6C5D] mb-3">
                    Fecha
                  </p>

                  <h2 className="text-4xl font-serif">
                    26 · Septiembre · 2026
                  </h2>
                </div>

                <p className="text-[#5B6B72] leading-8">
                  Después de la ceremonia celebraremos juntos un día inolvidable
                  rodeados de nuestras familias y amigos.
                </p>
              </section>

              {/* LUGARES */}
              <section className="grid gap-6">
                <div className="bg-[#1E3842] text-white rounded-[38px] p-8 shadow-2xl">
                  <p className="uppercase tracking-[0.25em] text-xs mb-3 opacity-70">
                    Ceremonia
                  </p>

                  <h3 className="text-3xl font-serif mb-2">
                    Capilla del Dulce Nombre de Jesús
                  </h3>

                  <p className="opacity-80">Sevilla</p>
                </div>

                <div className="bg-[#E8DDD0] rounded-[38px] p-8 shadow-xl">
                  <p className="uppercase tracking-[0.25em] text-xs mb-3 text-[#7A6C5D]">
                    Celebración
                  </p>

                  <h3 className="text-3xl font-serif mb-2">
                    Hacienda Al-Yamanah
                  </h3>

                  <p className="text-[#5B6B72]">Sanlúcar la Mayor</p>
                </div>
              </section>

              {/* AUTOBUSES */}
              <section className="space-y-10">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-[#7A6C5D] mb-3">
                    Organización del día
                  </p>

                  <h2 className="text-4xl font-serif">
                    Horarios y Autobuses
                  </h2>
                </div>

                <div className="grid gap-6">
                  {buses.map((bus, i) => (
                    <div
                      key={i}
                      className="bg-[#FAF7F2]/90 rounded-[35px] p-8 border border-[#E7DED4] shadow-lg"
                    >
                      <p className="text-sm uppercase tracking-[0.25em] text-[#8B7765] mb-4">
                        {bus.hora}
                      </p>

                      <h3 className="text-2xl font-serif mb-4 leading-tight break-words">
                        {bus.titulo}
                      </h3>

                      <p className="text-[#5B6B72] leading-7">
                        {bus.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* DRESS CODE */}
              <section className="bg-[#1E3842] text-white rounded-[42px] p-10 shadow-2xl">
                <p className="uppercase tracking-[0.3em] text-xs opacity-70 mb-4">
                  Dress Code
                </p>

                <h2 className="text-4xl font-serif mb-8">
                  Elegancia clásica
                </h2>

                <div className="space-y-5 text-white/85 leading-8">
                  <p>
                    Hombres de chaqué.
                  </p>

                  <p>
                    Mujeres de manera elegante.
                  </p>

                  <p>
                    El color blanco queda reservado para la novia.
                  </p>
                </div>
              </section>

              {/* FORMULARIO */}
              <section className="space-y-8">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-[#7A6C5D] mb-3">
                    Confirmación
                  </p>

                  <h2 className="text-4xl font-serif">
                    Nos encantará contar contigo
                  </h2>
                </div>

                <div className="grid gap-5">
                  <input
                    type="text"
                    placeholder="Nombre y apellidos"
                    className="bg-[#FAF7F2]/90 border border-[#DDD2C5] rounded-full px-7 py-5 outline-none focus:ring-2 focus:ring-[#1E3842]"
                  />

                  <select className="bg-[#FAF7F2]/90 border border-[#DDD2C5] rounded-full px-7 py-5 outline-none focus:ring-2 focus:ring-[#1E3842]">
                    <option>¿Asistirás a la boda?</option>
                    <option>Sí, asistiré</option>
                    <option>No podré asistir</option>
                  </select>

                  <select className="bg-[#FAF7F2]/90 border border-[#DDD2C5] rounded-full px-7 py-5 outline-none focus:ring-2 focus:ring-[#1E3842]">
                    <option>¿Utilizarás el autobús?</option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Alergias o intolerancias"
                    className="bg-[#FAF7F2]/90 border border-[#DDD2C5] rounded-[30px] px-7 py-6 outline-none focus:ring-2 focus:ring-[#1E3842]"
                  />

                  <button className="bg-[#1E3842] text-white rounded-full py-5 tracking-[0.2em] uppercase text-sm hover:opacity-90 transition-all">
                    Enviar confirmación
                  </button>
                </div>
              </section>

              {/* FOOTER */}
              <footer className="pt-10 pb-24 text-center">
                <p className="text-[#7A6C5D] uppercase tracking-[0.35em] text-xs mb-4">
                  Isabel y Miguel
                </p>

                <p className="text-[#5B6B72]">
                  26 de septiembre de 2026
                </p>
              </footer>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
