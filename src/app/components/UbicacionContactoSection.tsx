"use client";

import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function UbicacionContactoSection() {
  return (
    <section className="py-16 px-6 bg-white flex flex-col items-center text-center" id="ubicaciones">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">
        Ubicación y Contacto
      </h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl items-start">
        {/* Mapa embebido */}
        <div className="w-full h-80 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.4691290800035!2d-103.5437139!3d20.7419532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84260381d61bf0c3%3A0x99e0b1e226c8d5f0!2sOcean%20Smile!5e0!3m2!1ses-419!2smx!4v1721499321116!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col gap-4 items-center md:items-start text-slate-800 text-left">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-700 mt-1" />
            <span>
              Avenida de la Huerta 634 Local 6 La Venta del Astillero, 45221{" "}
              <br />
              Zapopan, Jal.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-700" />
            <a href="tel:+528181234567" className="hover:underline">
              +52 33 31 49 58 31
            </a>
          </div>

          {/* <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-700" />
            <a href="mailto:contacto@clinicadental.com" className="hover:underline">contacto@clinicadental.com</a>
          </div> */}

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-700" />
            <span>Lunes a Viernes: 9:00 AM - 2:00 PM</span>
            <span>Lunes a Viernes: 4:00 PM - 8:00 PM</span>
            <span>Sábado: 9:00 AM - 2:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
