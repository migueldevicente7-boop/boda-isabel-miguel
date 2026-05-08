"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const weddingDate = new Date("2026-09-26T12:00:00");

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      const dias = Math.floor(distance / (1000 * 60 * 60 * 24));

      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutos = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const segundos = Math.floor(
        (distance % (1000 * 60)) /
        1000
      );

      setTimeLeft({
        dias,
        horas,
        minutos,
        segundos,
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <main className="bg-[#f6f1eb] text-[#243746] animate-fadeIn">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-[url('/foto-boda.JPEG')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="fade-up relative z-10 text-center px-6 text-white">

          <p className="uppercase tracking-[0.4em] text-sm text-[#f6f1eb] mb-8">
            Una celebración inolvidable
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-9xl tracking-tight leading-none font-serif">
            Isabel
          </h1>

          <p className="text-4xl my-4 text-[#d6c1a3]">
            y
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-9xl tracking-tight leading-none font-serif">
            Miguel
          </h1>

          <div className="mt-10">
            <p className="tracking-[0.3em] uppercase text-sm">
              26 · Septiembre · 2026
            </p>
          </div>

          <a
            href="#rsvp"
            className="inline-block mt-12 px-10 py-5 border border-[#f6f1eb] text-[#f6f1eb] uppercase tracking-[0.25em] text-sm rounded-full hover:bg-[#f6f1eb] hover:text-[#243746] transition duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-xl"
          >
            Confirmar asistencia
          </a>

        </div>

      </section>

      {/* CONTADOR */}
      <section className="py-24 bg-[#fffdf9] border-y border-[#ece7df] text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-6">
          Cuenta atrás
        </p>

        <div className="w-24 h-px bg-[#d6c1a3] mx-auto mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">

          <div className="fade-up bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.dias}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Días
            </p>
          </div>

          <div className="fade-up bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.horas}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Horas
            </p>
          </div>

          <div className="fade-up bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.minutos}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Minutos
            </p>
          </div>

          <div className="fade-up bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.segundos}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Segundos
            </p>
          </div>

        </div>

      </section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 py-20 md:py-32">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-5">
            Nuestra boda
          </p>

          <h2 className="text-5xl mb-8 font-serif">
            Celebremos juntos un día inolvidable
          </h2>

          <div className="w-24 h-px bg-[#d6c1a3] mx-auto mb-10" />

          <p className="max-w-2xl mx-auto text-xl leading-10 text-[#5b6b76]">
            Después de tantos momentos compartidos,
            llega uno de los días más importantes de nuestras vidas.
            Nos haría muchísima ilusión celebrar este día con vosotros.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {/* CEREMONIA */}
          <div className="fade-up bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl">

            <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-5">
              Ceremonia
            </p>

            <h3 className="text-4xl mb-4 font-serif">
              Capilla del Dulce Nombre de Jesús
            </h3>

            <p className="text-[#b89b72] mb-8">
              Sevilla
            </p>

            <a
              href="https://maps.google.com/?q=Capilla+del+Dulce+Nombre+de+Jesús+Sevilla"
              target="_blank"
              className="inline-block mb-10 px-6 py-3 border border-[#d6c1a3] rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#243746] hover:text-white transition duration-500 hover:scale-[1.03] active:scale-[0.98]"
            >
              Cómo llegar
            </a>

            <div className="space-y-4 text-lg text-[#5b6b76] leading-9">

              <p>
                26 de septiembre de 2026
              </p>

              <p>
                12:00 horas
              </p>

            </div>

          </div>

          {/* CONVITE */}
          <div className="fade-up bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl">

            <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-5">
              Celebración
            </p>

            <h3 className="text-4xl mb-4 font-serif">
              Hacienda Al-Yamanah
            </h3>

            <p className="text-[#b89b72] mb-8">
              Sanlúcar la Mayor
            </p>

            <a
              href="https://maps.google.com/?q=Hacienda+Al-Yamanah+Sanlúcar+la+Mayor"
              target="_blank"
              className="inline-block mb-10 px-6 py-3 border border-[#d6c1a3] rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#243746] hover:text-white transition duration-500 hover:scale-[1.03] active:scale-[0.98]"
            >
              Cómo llegar
            </a>

            <div className="space-y-4 text-lg text-[#5b6b76] leading-9">

              <p>
                Posterior convite y celebración.
              </p>

              <p>
                Un día inolvidable.
              </p>

            </div>

          </div>

        </div>

        {/* AUTOBUSES */}
        <div className="fade-up mt-16 bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl">

          <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-5">
            Transporte
          </p>

          <h3 className="text-4xl mb-10 font-serif">
            Horarios de autobuses
          </h3>

          <div className="space-y-10 text-lg leading-9 text-[#5b6b76]">

            <div>
              <p className="font-semibold text-[#243746]">
                Ida a la ceremonia
              </p>

              <p>
                Salida desde el recinto ferial de Olivares — 10:30 horas
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-[#243746]">
                Ida al convite
              </p>

              <p>
                Salida de dos autobuses tras la ceremonia con destino Hacienda Al-Yamanah
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#243746]">
                Vuelta intermedia
              </p>

              <p>
                Autobús hacia Sevilla — 19:00 horas
              </p>

              <p>
                Autobús hacia Olivares — 19:00 horas
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#243746]">
                Vuelta final
              </p>

              <p>
                Ambos autobuses volverán a salir al finalizar la fiesta:
              </p>

              <p>
                • Dirección Sevilla
              </p>

              <p>
                • Dirección Olivares
              </p>

            </div>

          </div>

        </div>

        {/* RSVP */}
        <section
          id="rsvp"
          className="mt-20 bg-[#243746] rounded-[40px] p-12 text-white shadow-2xl"
        >

          <div className="text-center mb-12">

            <p className="uppercase tracking-[0.3em] text-sm text-[#d6c1a3] mb-4">
              Confirmación
            </p>

            <h2 className="text-5xl mb-6 font-serif">
              Nos encantará celebrar este día contigo
            </h2>

            <div className="w-24 h-px bg-[#d6c1a3] mx-auto" />

          </div>

          <form
            action="https://formsubmit.co/familiadevicentepena@gmail.com"
            method="POST"
            className="grid gap-6 max-w-3xl mx-auto"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="Nombre"
              placeholder="Nombre y apellidos"
              required
              className="w-full p-5 rounded-2xl text-base text-black border border-[#e7dfd6] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#b89b72] transition"
            />

            <select
              name="Asistencia"
              required
              className="w-full p-5 rounded-2xl text-base text-black border border-[#e7dfd6] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#b89b72] transition"
            >
              <option value="">
                ¿Asistirás a la boda?
              </option>

              <option>
                Sí asistiré
              </option>

              <option>
                No podré asistir
              </option>
            </select>

            <select
              name="Autobus"
              required
              className="w-full p-5 rounded-2xl text-base text-black border border-[#e7dfd6] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#b89b72] transition"
            >
              <option value="">
                ¿Necesitarás autobús?
              </option>

              <option>
                Sí
              </option>

              <option>
                No
              </option>
            </select>

            <textarea
              name="Mensaje"
              placeholder="Alergias, intolerancias o mensaje"
              rows={5}
              className="w-full p-5 rounded-2xl text-base text-black border border-[#e7dfd6] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#b89b72] transition"
            />

            <button
              type="submit"
              className="rounded-full shadow-xl hover:scale-[1.02] transition duration-500 hover:scale-[1.03] active:scale-[0.98]"
            >
              Enviar confirmación
            </button>

          </form>

        </section>

      </section>

    </main>

  );

}
