'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroSectionProps {
    titulo: string
    subtitulo: string
    ctaTexto?: string
    ctaLink?: string
    imagenSrc: string
    align?: 'left' | 'right' | 'center'
    fullHeight?: boolean
}

export default function HeroSection({
    titulo,
    subtitulo,
    ctaTexto = 'Contáctanos',
    ctaLink = 'https://wa.me/523331495831',
    imagenSrc,
    align = 'left',
    fullHeight = true,
}: HeroSectionProps) {
    const alignment =
        align === 'right'
            ? 'items-end text-right'
            : align === 'center'
                ? 'items-center text-center'
                : 'items-start text-left'

    return (
        <section
            className={`relative w-full overflow-hidden text-white ${fullHeight ? 'min-h-screen' : 'h-auto'}`}
        >
            <Image
                src={imagenSrc}
                alt="Hero background"
                fill
                className="z-0 object-cover brightness-[.5]"
                priority
            />

            <motion.div
                className={`relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl py-20 ${alignment}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{titulo}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">{subtitulo}</p>
                {ctaTexto && (
                    <a
                        href={ctaLink}
                        className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-neutral-200 transition w-fit"
                    >
                        {ctaTexto}
                    </a>
                )}
            </motion.div>
        </section>
    )
}
