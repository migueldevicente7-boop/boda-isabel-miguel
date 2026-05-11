"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const weddingDate = new Date("2026-09-26T12:00:00");

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [submitted, setSubmitted] = useState(false);

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
  
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  sectionsRef.current.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

  return (

    <main className="bg-[#f6f1eb] text-[#243746] animate-fadeIn">

      {/* HERO */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >

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
            className="inline-block mt-12 px-12 py-5 border border-[#f6f1eb] text-[#f6f1eb] uppercase tracking-[0.25em] text-sm rounded-full hover:bg-[#f6f1eb] hover:text-[#243746] transition duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-xl"
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

          <div
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            className="fade-scroll bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.dias}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Días
            </p>
          </div>

          <div
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            className="fade-scroll bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.horas}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Horas
            </p>
          </div>

          <div 
            ref={(el) => {
              sectionsRef.current[2] = el;
            }}
            className="fade-scroll bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
            <h2 className="text-6xl font-serif">
              {timeLeft.minutos}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Minutos
            </p>
          </div>

          <div 
            ref={(el) => {
              sectionsRef.current[3] = el;
            }}
            className="fade-scroll bg-white/80 backdrop-blur-sm rounded-[32px] p-10 shadow-xl hover:-translate-y-1 transition duration-500 hover:scale-[1.03] active:scale-[0.98]">
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
      <section 
        id="info"
        className="max-w-6xl mx-auto px-5 md:px-6 py-20 md:py-32"
      >
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
          <div 
            ref={(el) => {
              sectionsRef.current[4] = el;
            }}
            className="fade-scroll bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl">

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
            <div className="mt-8 overflow-hidden rounded-[24px] shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Capilla+del+Dulce+Nombre+de+Jesús+Sevilla&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

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
          <div 
            ref={(el) => {
              sectionsRef.current[5] = el;
            }}
            className="fade-scroll bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl">

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
            <div className="mt-8 overflow-hidden rounded-[24px] shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Hacienda+Al+Yamanah+Sanlucar+la+Mayor&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

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
        <div 
          ref={(el) => {
              sectionsRef.current[6] = el;
          }}
          id="transporte"
          className="fade-scroll mt-16 bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl"
        >
          
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

<div 
  ref={(el) => {
    sectionsRef.current[7] = el;
  }}
  className="fade-scroll mt-16 bg-white/80 backdrop-blur-sm rounded-[40px] p-12 shadow-xl text-center"
>

  <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-4">
    Regalos
  </p>

  <h2 className="text-4xl font-serif text-[#243746] mb-8">
    Un pequeño empujón para nuestra nueva aventura
  </h2>

  <p className="max-w-2xl mx-auto text-lg leading-9 text-[#5b6b76] mb-10">
    Vuestra presencia en nuestra boda será, sin duda,
    el mejor regalo.
    <br /><br />
    Pero si además queréis ayudarnos en esta nueva etapa,
    os dejamos nuestra cuenta bancaria.
    <br /><br />
    Aunque somos bastante tradicionales…
    y el efectivo siempre nos ha parecido una maravilla 😊
  </p>

  <div className="inline-flex flex-col items-center gap-5 bg-[#f6f1eb] rounded-[32px] px-10 py-7 shadow-md">

  <p className="tracking-[0.38em] text-[#243746] text-lg md:text-xl font-medium">
    ES74&nbsp;&nbsp;1465&nbsp;&nbsp;0100&nbsp;&nbsp;9117&nbsp;&nbsp;6512&nbsp;&nbsp;4188
  </p>

  <button
    onClick={() => {
      navigator.clipboard.writeText("ES74 1465 0100 9117 6512 4188");
    }}
    className="bg-[#243746] text-white px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#1b2a38] transition duration-300"
  >
    Copiar IBAN
  </button>

</div>

</div>
        
        {/* RSVP */}
        
        {!submitted && (
        <section
          ref={(el) => {
              sectionsRef.current[8] = el;
            }}
          id="rsvp"
          className="fade-scroll mt-20 bg-[#243746] rounded-[40px] p-12 text-white shadow-2xl"
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
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;

              await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSdSCIp845KD9xWAxBCLCj04RpEazcaSJ_QRUeye4YAq0_wg9Q/formResponse",
                {
                  method: "POST",
                  body: new FormData(form),
                  mode: "no-cors",
                }
              );

              setSubmitted(true);
            }}
            className="grid gap-6 max-w-3xl mx-auto"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="entry.2091871682"
              placeholder="Nombre y apellidos"
              required
              className="w-full p-5 rounded-2xl text-base text-black border border-[#e7dfd6] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#b89b72] transition"
            />

            <select
              name="entry.998284951"
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
              name="entry.1972361015"
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
              name="entry.1356331200"
              placeholder="Alergias, intolerancias o mensaje"
              rows={5}
              className="w-full p-5 rounded-2xl text-base text-black border border-[#e7dfd6] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#b89b72] transition"
            />

            <button
              type="submit"
              className="w-full bg-[#8b9b72] text-white py-5 rounded-full uppercase tracking-[0.25em] text-sm shadow-xl hover:bg-[#74825d] hover:scale-[1.02] active:scale-[0.98] transition duration-500"
            >
              Enviar confirmación
            </button>

          </form>

        </section>
        )}

      </section>
      {submitted && (
        <section
          id="gracias"
          className="fade-thanks py-24 flex items-center justify-center bg-[#f6f1eb] px-6 text-center"
        >
  <div className="max-w-2xl">
    <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-6">
      Confirmación enviada
    </p>

    <h2 className="text-5xl md:text-7xl font-serif text-[#243746] mb-8">
      Gracias 💍
    </h2>

    <p className="text-xl leading-9 text-[#5b6b76]">
      Hemos recibido vuestra confirmación correctamente.
      <br />
      Estamos deseando celebrar este día tan especial con vosotros.
    </p>
  </div>
</section>
      )}
<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full px-4 py-3">

    <a
      href="#inicio"
      className="px-3 py-2 text-sm text-[#243746] font-medium"
    >
      Inicio
    </a>

    <a
      href="#info"
      className="px-3 py-2 text-sm text-[#243746] font-medium"
    >
      Info
    </a>

    <a
      href="#transporte"
      className="px-3 py-2 text-sm text-[#243746] font-medium"
    >
      Bus
    </a>

    <a
      href="#rsvp"
      className="px-3 py-2 text-sm bg-[#243746] text-white rounded-full"
    >
      RSVP
    </a>

  </div>
</div>
    </main>

  );

}
