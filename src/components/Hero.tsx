import Image from "next/image";
import { Container } from "./Container";
import homeImage from "@/../public/europe-flag.jpg";
import { Button } from "./Button";

export const Hero = () => {
	return (
		<Container className="!p-0 !gap-0">
			<div className="relative">
				<Image
					src={homeImage}
					className="size-full object-cover h-[50svh] lg:h-[40svh]"
					alt="home image"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-accent/40 to-accent/90"></div>
				<h1 className="text-5xl absolute left-8 w-fit mx-auto right-8 bottom-6 text-balance font-bold items-center text-white flex gap-2">
					Financiación Europea para proyectos de Torrevieja
				</h1>
			</div>
			<Container className="!py-4 !w-fit mx-auto">
				<p className="max-w-[80ch] text-lg">
					El Plan de Recuperación, Transformación y Resiliencia, con más de
					140.000 millones de euros, traza la hoja de ruta para la modernización
					de la economía española, la recuperación del crecimiento económico y
					la creación de empleo, para la reconstrucción económica sólida,
					inclusiva y resiliente tras la crisis de la COVID, y para responder a
					los retos de la próxima década.
				</p>
				<Button>Iniciar proceso</Button>
			</Container>
		</Container>
	);
};
