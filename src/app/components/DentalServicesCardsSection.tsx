'use client'

import React from 'react'
import DentalServiceCard from './DentalServiceCard'

const servicios = [
  {
    title: 'Limpieza Dental',
    description: 'Eliminación profesional de placa, sarro y manchas.',
    imageSrc: '/limpieza_dental.png',
  },
  {
    title: 'Ortodoncia',
    description: 'Corrección de dientes con brackets o alineadores.',
    imageSrc: '/ortodoncia.png',
  },
  {
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado para niños.',
    imageSrc: '/odontopediatra.png',
    isPediatric: true,
  },
  {
    title: 'Resinas',
    description: 'Reconstrucción de dientes con material estético.',
    imageSrc: '/resinas_dentales.png',
  },
  {
    title: 'Endodoncia',
    description: 'Tratamiento de conductos en dientes infectados.',
    imageSrc: '/endodoncia.png',
  },
]

const DentalServicesCardsSection = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Servicios Dentales
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {servicios.map((servicio, i) => (
          <DentalServiceCard
            key={i}
            title={servicio.title}
            description={servicio.description}
            imageSrc={servicio.imageSrc}
            isPediatric={servicio.isPediatric}
          />
        ))}
      </div>
    </section>
  )
}

export default DentalServicesCardsSection
