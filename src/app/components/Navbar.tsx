'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Menu, X } from 'lucide-react'

type NavLink = {
    label: string
    href: string
}

type NavbarProps = {
    links: NavLink[]
    ctaText: string
    ctaHref: string
}

export default function Navbar({ links, ctaText, ctaHref }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-white shadow-sm"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo con imagen */}
                <Link href="/" className="flex items-center space-x-2">
                    <img
                        src="/tooth-icon.png"
                        alt="Logo OseanSmile"
                        className="h-9 w-auto"
                    />
                    <span className="text-2xl font-bold text-blue-800">OseanSmile</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-800 transition font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    href={ctaHref}
                    className="hidden md:flex ml-6 bg-blue-800 text-white px-4 py-2 rounded-full items-center gap-2 text-sm hover:bg-blue-900 transition"
                >
                    <Calendar size={16} /> {ctaText}
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu content */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden px-6 pb-4 bg-white border-t"
                    >
                        <div className="flex flex-col gap-4">
                            {links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-700 hover:text-blue-800 transition font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                href={ctaHref}
                                className="mt-2 bg-blue-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-blue-900 transition w-fit"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Calendar size={16} /> {ctaText}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
