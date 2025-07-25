import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BotonWhatsapp from "./components/WhatsAppButton";
import FooterSitio from "./components/Footer";
import { FaTooth, FaTeethOpen, FaSmileBeam } from "react-icons/fa";
import ReviewsSection from "./components/ReviewSection";
import UbicacionContactoSection from './components/UbicacionContactoSection'
import DentalServicesSection from './components/DentalServicesCardsSection';
import FaqSection from './components/FaqSection';

export default function Home() {
  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "#servicios" },
    { label: "Reseñas", href: "#reseñas" },
    { label: "Preguntas Frecuentes", href: "#faq" },
    { label: "Ubicación", href: "#ubicaciones" },
  ];

  const servicios = [
    { nombre: "Limpieza dental", icono: <FaTooth /> },
    { nombre: "Blanqueamiento", icono: <FaTeethOpen /> },
    { nombre: "Ortodoncia", icono: <FaTeethOpen /> },
    { nombre: "Endodoncia" },
    { nombre: "Implantes dentales" },
    { nombre: "Diseño de sonrisa" },
  ];

  return (
    <>
      <Navbar
        links={navLinks}
        ctaText="Agendar cita"
        ctaHref="https://wa.me/523331495831"
      />

      <HeroSection
        titulo="Bienvenido a OceanSmile"
        subtitulo="Tu sonrisa, nuestra pasión. Atención dental de calidad en un ambiente amigable."
        ctaTexto="Contáctanos"
        ctaLink="https://wa.me/523331495831"
        imagenSrc="/hero_image_1.png"
        align="center"
        fullHeight={true}
      />

       <DentalServicesSection />

      <ReviewsSection
        titulo="Lo que opinan nuestros pacientes"
        reseñas={[
          {
            nombre: "Israel Ruelas",
            texto: "Tiene todo tipo de servicios, muy confiable y lugar muy adecuado y cómodo. Lo recomiendo 100%, el trato es muy amable.",
            link: "https://maps.app.goo.gl/fX4gr5FUzSwDsPQu8"
          },
          {
            nombre: "Fernando Ledesma",
            texto: "Muy buen servicio de la Doctora, la cita fue en el horario acordado Se tienen todas las medidas se Salud y Seguridad contra el Covi-d Te explica claramente lo que se va a realizar y te muesta los resultados Tiene musica de fondo para evitar que te pongas nervioso Hice el pago por transferencia electronica para tramitar mi Factura CFDI Te llaman un dia antes para confirmar la cita y no se te olvide.",
            link: "https://maps.app.goo.gl/K8Qcna2Bv8ezpuF9A"
          },
          {
            nombre: "Lisa Pacheco",
            texto: "Recomendado! La doctora muy amable, alegre, atente, profesional, te explica todo y se preocupa por tu comodidad. Cuentan con muchos servicios a buenos precios.",
            link: "https://maps.app.goo.gl/uhgdFrrbSN3upJWh6"
          },
        ]}
        />

      <FaqSection />

      <UbicacionContactoSection />

      <BotonWhatsapp />
      <FooterSitio />

      {/* Aquí puedes agregar más secciones como Sobre Nosotros, Servicios, etc. */}
    </>
  );
}
