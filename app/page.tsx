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

        <div className="absolute inset-0 bg-black/40" />

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

      {/* CONTADOR */}
      <section className="py-24 bg-[#fffdf9] border-y border-[#ece7df] text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#b89b72] mb-6">
          Cuenta atrás
        </p>

        <div className="w-24 h-px bg-[#d6c1a3] mx-auto mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-6xl">
              {timeLeft.dias}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Días
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-6xl">
              {timeLeft.horas}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Horas
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-6xl">
              {timeLeft.minutos}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Minutos
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-6xl">
              {timeLeft.segundos}
            </h2>

            <p className="uppercase tracking-[0.2em] text-sm mt-4 text-[#b89b72]">
              Segundos
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
