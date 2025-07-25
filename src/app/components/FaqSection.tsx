'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  pregunta: string
  respuesta: string
}

const faqs: FAQItem[] = [
  {
    pregunta: '¿Cada cuánto tiempo debo hacerme una limpieza dental?',
    respuesta: 'Se recomienda realizar una limpieza dental profesional cada 6 meses para mantener una buena salud bucal.'
  },
  {
    pregunta: '¿El blanqueamiento dental daña los dientes?',
    respuesta: 'No, si es realizado por un profesional. El blanqueamiento está formulado para ser seguro y efectivo bajo supervisión dental.'
  },
  {
    pregunta: '¿Qué diferencia hay entre resinas y amalgamas?',
    respuesta: 'Las resinas son estéticas y del color del diente, ideales para zonas visibles. Las amalgamas son metálicas, duraderas y más notorias.'
  },
  {
    pregunta: '¿Duele una endodoncia?',
    respuesta: 'No debería doler gracias a la anestesia local. Puede haber molestias leves posteriores que se controlan con analgésicos.'
  },
  {
    pregunta: '¿Cuándo es necesaria una extracción dental?',
    respuesta: 'Cuando un diente está muy dañado, no tiene espacio o afecta la salud de los dientes vecinos.'
  },
  {
    pregunta: '¿Qué hacer si se me cae una resina?',
    respuesta: 'Debes acudir al dentista lo antes posible para evitar sensibilidad o daño mayor. No intentes pegarla por tu cuenta.'
  },
  {
    pregunta: '¿Desde qué edad deben acudir los niños al dentista?',
    respuesta: 'Se recomienda llevarlos desde su primer año de vida o cuando sale el primer diente.'
  },
  {
    pregunta: '¿Cuánto cuesta una limpieza dental?',
    respuesta: 'El costo puede variar, pero manejamos precios accesibles. Puedes contactarnos para cotizar sin compromiso.'
  },
  {
    pregunta: '¿Aceptan pagos con tarjeta?',
    respuesta: 'Sí, aceptamos pagos con tarjeta de débito y crédito.'
  },
  {
    pregunta: '¿Dan factura?',
    respuesta: 'Sí, emitimos factura si así lo necesitas. Solo solicítala al momento del pago.'
  },
  {
    pregunta: '¿Cómo puedo agendar una cita?',
    respuesta: 'Puedes hacerlo por WhatsApp o llamada. ¡Es muy fácil y rápido!'
  },
  {
    pregunta: '¿Puedo agendar por WhatsApp?',
    respuesta: 'Sí, de hecho es el medio más rápido y directo. Nuestro número está disponible en todo momento.'
  },
  {
    pregunta: '¿Dónde están ubicados exactamente?',
    respuesta: 'Estamos en Av. López Mateos Sur 123, Planta Baja. Puedes ver la ubicación exacta en Google Maps desde nuestra sección de contacto.'
  }
]

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-blue-50" id='faq'>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className="w-full text-left px-6 py-4 bg-blue-50 hover:bg-blue-100 transition flex justify-between items-center"
              >
                <span className="font-medium text-blue-800">{faq.pregunta}</span>
                <span>{index === activeIndex ? '-' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {index === activeIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-700 text-sm"
                  >
                    {faq.respuesta}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
