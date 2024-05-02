import { Carousel, Typography } from "@material-tailwind/react";
import image_1 from "../assets/galleta.webp";
import image_2 from "../assets/galleta-2.webp";
import image_3 from "../assets/galleta-3.webp";

export default function Header() {
    return (
        <Carousel id="header" className="h-4/5"
            loop={true}
            autoplay={true}
            autoplayDelay={5 * 1000}
        >
            <div className="relative w-full h-full">
                <img
                    src={image_1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 border-solid border-white border-8 rounded-2xl">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mt-12 mb-4 text-3xl md:text-6xl"
                        >
                            NutriGall
                        </Typography>
                        <Typography
                            variant="h3"
                            color="white"
                            className="mb-4 text-xl md:text-2xl lg:text-4xl opacity-80"
                        >
                            El sabor que da vida
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            porque merecemos comer saludable
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full">
                <img
                    src={image_2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-6xl md:text-8xl lg:text-8xl"
                        >
                            2x1
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80 text-justify"
                        >
                            ¡Regístrate en nuestra página y aprovecha nuestro exclusivo 2x1 en tu primer compra! ¡No te lo pierdas!
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full">
                <img
                    src={image_3}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-6xl md:text-8xl lg:text-8xl"
                        >
                            30% OFF
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80 text-justify"
                        >
                            ¡Haz tu segundo pedido y obtén un 30% de descuento en toda tu compra! ¡No dejes pasar esta oportunidad de ahorrar!
                        </Typography>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}