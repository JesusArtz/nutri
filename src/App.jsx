import { NavBar, Header, DataCard, ImageCard, Comment, Footer } from "./components";
import { Typography } from "@material-tailwind/react";
import { GiMountaintop, GiCyberEye } from "react-icons/gi";
import { SiValorant } from "react-icons/si";



import icon from "./assets/icon.webp";
import galleta_2 from "./assets/galleta-2.webp";
import alpiste from "./assets/alpiste.webp"
import miel from "./assets/miel.webp";
import harina from "./assets/harina.webp";
import margarina from "./assets/margarina.webp";
import paquete from "./assets/paquete.webp";
import testimonio from "./assets/testimonio.mp4"
import { useState } from "react";


export default function App() {
    const [selected, setSelected] = useState();
    return (
        <>
            <NavBar />
            <Header />
            <section id="nuestra-historia" className="w-full px-16 py-12 flex flex-col md:flex-row items-center justify-center">
                <img src={icon} alt="icon" className="w-64 md:mr-12" />
                <div className="w-3/4 text-justify">
                    <Typography
                        variant="h3"
                        color="black"
                        className="mb-6 opacity-80 text-4xl font-montserrat font-semibold md:text-start text-center"
                    >
                        Nuestra historia
                    </Typography>
                    <p className="font-montserrat">
                        NutriGall fue creado por cinco universitarias del Instituto Tecnológico De México campus Roque en el año 2023, quienes propusieron una galleta saludable pero con un sabor delicioso.

                        Las galletas integrales de alpiste tuvieron su primera elaboración en la ciudad de Guadalajara, Jalisco, en junio de 1994. Sin embargo, con el avance del tiempo, los ingredientes han sido perfeccionados para ofrecer un sabor más exquisito y garantizar un producto aún más saludable. En la actualidad, NutriGall se encuentra ubicada y produce en Celaya, Guanajuato.
                    </p>
                </div>
            </section>
            <section id="conocenos" className="w-full flex justify-center h-min lg:min-h-[720px] min-h-[1024px]">
                <div className="flex flex-row flex-wrap w-10/12 items-center justify-center">
                    <DataCard icon={GiMountaintop} title="Misión">
                        NutriGall busca lograr la satisfacción de los clientes razón de ello empleamos los mejores ingredientes que dan el sabor delicioso y aportando grandes beneficios en la salud.
                    </DataCard>
                    <DataCard icon={GiCyberEye} title="Visión">
                        Convertirnos en la mejor opción de galletas saludables y deliciosas generando bienestar a los que las consumen.
                    </DataCard>
                    <DataCard icon={SiValorant} title="Valores">
                        <ul>
                            <li>◉ Responsabilidad</li>
                            <li>◉ Excelencia</li>
                            <li>◉ Respeto</li>
                            <li>◉ Integridad</li>
                        </ul>
                    </DataCard>
                </div>
            </section>
            <section className="w-full px-4 md:px-16 py-12 flex flex-col md:flex-row items-center justify-center">
                <div className="w-3/4 text-justify">
                    <Typography
                        variant="h3"
                        color="black"
                        className="mb-6 opacity-80 text-3xl md:text-4xl font-montserrat font-semibold md:text-start text-center"
                    >
                        Conoce nuestro producto
                    </Typography>
                    <p className="w-full md:w-4/5 font-montserrat">
                        Las galletas de alpiste son una excelente fuente de proteínas vegetales, fibra, vitaminas, minerales y antioxidantes. Además, son bajas en grasas y poseen propiedades antiinflamatorias, lo que contribuye a prevenir el desgaste prematuro de la piel.
                    </p>
                </div>
                <img src={galleta_2} alt="icon" className="w-[36rem] mt-4 md:mt-0 md:ml-12 rounded-xl" />
            </section>
            <section className="w-full px-4 md:px-16 py-12 flex flex-col items-center justify-center">
                <Typography
                    variant="h3"
                    color="black"
                    className="mb-6 opacity-80 text-3xl md:text-4xl font-montserrat font-semibold md:text-start text-center"
                >
                    Ingredientes
                </Typography>

                <div className="flex flex-row w-full flex-wrap justify-center items-center">
                    <ImageCard
                        title="Alpiste"
                        text="Conocido por ser una excelente fuente de nutrientes, incluyendo proteínas, fibras, grasas saludables, vitaminas y minerales. Además, es bajo en calorías, lo que lo hace atractivo para quienes buscan una opción de alimentación saludable."
                        path={alpiste}
                        select={selected === "alpiste"}
                        onClick={() => setSelected(selected !== "alpiste" ? "alpiste" : "")}
                    />
                    <ImageCard
                        title="Miel"
                        text="La miel es conocida por sus propiedades antiinflamatorias, ayudando a reducir la hinchazón y el dolor. También es un antioxidante potente, protegiendo al cuerpo contra el daño celular. Además, actúa como un agente antibiótico, previniendo infecciones y matando bacterias dañinas."
                        path={miel}
                        select={selected === "miel"}
                        onClick={() => setSelected(selected !== "miel" ? "miel" : "")}
                    />
                    <ImageCard
                        title="Harina Integral"
                        text="Reducción de la absorción del colesterol LDL, disminuye los niveles de triglicéridos y de los lípidos, principales causas del desarrollo de enfermedades cardiovasculares, Ayuda a regular el peso corporal y prevenir la Diabetes tipo 2"
                        path={harina}
                        select={selected === "harina"}
                        onClick={() => setSelected(selected !== "harina" ? "harina" : "")}
                    />
                    <ImageCard
                        title="Margarina"
                        text="Es naturalmente libre de colesterol, puede ayudar a reducir los niveles de colesterol LDL (colesterol malo) en el cuerpo, al tiempo que promueve el aumento del colesterol HDL (colesterol bueno)."
                        path={margarina}
                        select={selected === "margarina"}
                        onClick={() => setSelected(selected !== "margarina" ? "margarina" : "")}
                    />
                </div>
            </section>
            <section className="w-full px-16 py-12 flex flex-col md:flex-row items-center justify-center">
                <img src={paquete} alt="icon" className="w-64 md:mr-12" />
                <div className="w-full md:w-3/4 text-justify">
                    <Typography
                        variant="h3"
                        color="black"
                        className="mb-6 opacity-80 text-4xl font-montserrat font-semibold md:text-start text-center"
                    >
                        Nuestra empaque
                    </Typography>
                    <p className="font-montserrat">
                        La empresa NutriGall está comprometida con la preservación del medio ambiente, y por eso nos enorgullece presentar nuestro empaque elaborado con cartón biodegradable, una opción que refleja nuestro firme compromiso con la sostenibilidad. Entendemos la importancia de reducir nuestro impacto en el entorno natural y, por ello, hemos optado por un material que se descompone de manera natural, minimizando así nuestra huella ecológica. Este enfoque no solo refleja nuestros valores como empresa, sino que también responde a la creciente demanda de opciones de embalaje más respetuosas con el medio ambiente por parte de nuestros consumidores. En NutriGall, estamos dedicados a adoptar prácticas empresariales responsables que contribuyan a un futuro más verde y saludable para las generaciones venideras.
                    </p>
                </div>
            </section>
            <section id="testimonios" className="w-full px-16 py-12 flex flex-col items-center justify-center">
                <Typography
                    variant="h3"
                    color="black"
                    className="mb-6 opacity-80 text-4xl font-montserrat font-semibold md:text-start text-center"
                >
                    Testimonios
                </Typography>
                <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-stretch">
                    <video className="w-8/12 md:w-6/12 lg:w-3/12 rounded-lg mb-4 lg:mb-0 lg:mr-4 mr-0" controls >
                        <source src={testimonio} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="flex flex-col justify-evenly  items-center w-full md:w-4/6 lg:w-3/6 pl-4">
                        <Comment name="Ana, corredora aficionada:" comment="'¡La galleta de alpiste es mi secreto para mantenerme en forma durante mis carreras matutinas! Es práctica, deliciosa y llena de energía para alcanzar mis metas'." />
                        <Comment name="Diego, amante del fitness:" comment="'Como fisicoculturista, la nutrición es clave. Estas galletas de alpiste son mi tentempié favorito entre entrenamientos. Son una fuente increíble de proteínas y carbohidratos para mantenerme en mi mejor forma'." />
                        <Comment name="María, ciclista entusiasta:" comment="'Llevo años buscando un snack que me dé el impulso que necesito en mis largos recorridos en bicicleta. Desde que descubrí estas galletas de alpiste, mis trayectos son mucho más llevaderos. ¡Son la combinación perfecta de sabor y nutrición!''." />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
