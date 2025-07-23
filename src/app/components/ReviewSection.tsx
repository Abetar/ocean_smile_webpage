'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Review {
    nombre: string
    texto: string
    link?: string
}

interface ReviewSectionProps {
    titulo?: string
    reseñas: Review[]
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
    titulo = 'Lo que opinan nuestros pacientes',
    reseñas
}) => {
    return (
        <section className="py-20 px-4 md:px-24 bg-white text-center" id="reseñas">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10">
                {titulo}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {reseñas.map((review, i) => (
                    <motion.a
                        key={i}
                        href={review.link || '#'}
                        target={review.link ? '_blank' : undefined}
                        whileHover={{ scale: 1.03 }}
                        className="block bg-blue-50 p-6 rounded-xl shadow-sm text-left transition hover:shadow-md"
                    >
                        <p className="text-sm text-gray-600 italic mb-2">“{review.texto}”</p>
                        <span className="text-sm font-semibold text-slate-800">— {review.nombre}</span>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}

export default ReviewSection
