import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative w-full border-solid border-t border-gray-400">
            <div className="pt-2 w-full px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography variant="h5" className="mb-6">
                        NutriGall
                    </Typography>
                </div>
                <div className="grid grid-cols-3 justify-between gap-4">
                    <Typography
                        as="a"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                        Horario de atención al cliente:<br />8:00 a 18:00, de lunes a sábado
                    </Typography>
                    <Typography
                        as="a"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                        Ubicación de nuestra empresa:<br />Celaya Guanajuato
                    </Typography>
                    <Typography
                        as="a"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                        Teléfono:<br />461 11125172
                    </Typography>
                </div>
                <div className=" flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">NutriGall</a>. Todos los derechos reservados.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" href="https://www.facebook.com/profile.php?id=61558939640509&mibextid=ZbWKwL" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaFacebook className="w-5 h-5" />
                        </Typography>
                        <Typography as="a" href="https://www.instagram.com/nutrigall/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaInstagram className="w-5 h-5" />
                        </Typography>
                        <Typography as="a" href="mailto:nutrigall.alpiste@gmail.com" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaEnvelope className="w-5 h-5" />
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}