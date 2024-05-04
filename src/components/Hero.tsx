import Image from "next/image";
import { Container } from "./Container";
import homeImage from "@/../public/home-1.png";

export const Hero = () => {
	return (
		<Container className="!p-0 !gap-0">
			<Image
				src={homeImage}
				className="size-full object-cover object-top max-h-[60svh]"
				alt="home image"
			/>
			<Container className="!py-4">
				<h1 className="text-3xl text-balance font-bold items-center text-accent flex gap-2">
					Fondos Europeos para empresas de Torrevieja
				</h1>
				<p>
					El Plan de Recuperación, Transformación y Resiliencia, con más de
					140.000 millones de euros, traza la hoja de ruta para la modernización
					de la economía española, la recuperación del crecimiento económico y
					la creación de empleo, para la reconstrucción económica sólida,
					inclusiva y resiliente tras la crisis de la COVID, y para responder a
					los retos de la próxima década.
				</p>
				<button className="bg-accent rounded-md flex items-center gap-2 w-fit px-5 py-2 text-white text-lg font-medium">
					Iniciar proceso
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="size-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</button>
			</Container>
		</Container>
	);
};
