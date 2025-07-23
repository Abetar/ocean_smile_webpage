export default function FooterSitio() {
    return (
        <footer className="bg-black-100 text-center text-sm text-grey-800 py-6">
            <p className="mb-2">© {new Date().getFullYear()} Ocean Smile. Todos los derechos reservados.</p>
            <p className="text-xs text-grey-700">
                Sitio desarrollado por{" "}
                <a
                    href="https://agsolutions.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal-900 transition"
                >
                    AG Solutions Dev
                </a>
            </p>
        </footer>
    )
}