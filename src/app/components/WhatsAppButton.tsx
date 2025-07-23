
'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function BotonWhatsapp() {
    return (
        <a
            href="https://wa.me/523331495831"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
            aria-label="Chatear por WhatsApp"
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    )
}