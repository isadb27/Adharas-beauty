import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-100 text-neutral-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-[320px_1fr] md:gap-10 md:px-6">
        {/* Izquierda: logo/arte */}
        <div className="flex items-center justify-center md:justify-start">
          {/* Tu imagen está en /public/logofooter.png → se sirve como /logofooter.png */}
          <img
            src="/logofooter.png"
            alt="Adhara’s Beauty"
            className="h-44 w-full max-w-[320px] rounded object-cover"
          />
        </div>

        {/* Derecha: contenido */}
        <div className="flex flex-col justify-between">
          {/* Bloque superior */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide text-black">
              CUSTOMER SERVICE
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
              Operating hours are from 9am–9pm EST Monday–Friday and 9am–6pm EST Saturday.
              Reach out today!
            </p>

            <a
              href="mailto:customerservice@adharasbeauty.com"
              className="mt-2 inline-block text-sm font-semibold text-adhara-pink"
            >
              customerservice@adharasbeauty.com
            </a>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700">
              Shipping info, Returns, Help Q&amp;A, Paying methods, Gift cards, Gift cards balance.
              Do you have this questions?
            </p>

            <a href="/help" className="mt-2 inline-block link-adhara">
              click here
            </a>
          </div>

          {/* Bloque inferior */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 md:mt-10 md:flex-row md:items-center">
            {/* Links inferiores */}
            <nav className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm font-semibold">
              <a href="/locale" className="hover:underline">
                United States | English
              </a>
              <a href="/terms" className="hover:underline">
                Terms of use
              </a>
              <a href="/refund" className="hover:underline">
                Refund policy
              </a>
              <a href="/privacy" className="hover:underline">
                privacy
              </a>
            </nav>

            {/* Botón cookies */}
            <button
              type="button"
              className="rounded border border-adhara-pink px-4 py-2 text-sm font-bold text-adhara-pink transition hover:bg-pink-50"
              onClick={() => console.log("Open cookie settings")}
              aria-label="Cookies settings"
            >
              Cookies settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

