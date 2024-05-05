import { Button } from "./Button";
import { Container } from "./Container";
import Link from "next/link";

const Question = ({
	question,
	answer,
	href,
}: { question: string; answer: string; href: string }) => (
	<div className="flex flex-col bg-white w-full px-6 py-4 gap-2">
		<h4 className="text-2xl font-bold">{question}</h4>
		<p className="font-light max-w-[45ch] line-clamp-5">{answer}</p>
		<Link href={href}>
			<Button className="mt-4">Más información</Button>
		</Link>
	</div>
);

export const InfoSection = () => {
	return (
		<Container>
			<h2 className="text-2xl flex gap-2 items-center font-bold text-accent pt-12">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
					/>
				</svg>
				Pregunas frecuentes
			</h2>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<Question
					question="¿Cómo puedo encontrar convocatorias?"
					answer="Acceso al buscador últimas convocatorias financiadas por los fondos de recuperación europeos"
					href="https://planderecuperacion.gob.es/como-acceder-a-los-fondos/convocatorias?combine=&page=1"
				/>

				<Question
					question="¿Quién puede obtener financiación?"
					answer="Perfiles de los beneficiarios más comunes y las oportunidades de financiación de que disponen."
					href="https://commission.europa.eu/funding-tenders/how-apply/eligibility-who-can-get-funding_es"
				/>

				<Question
					question="¿Qué son los PERTE?"
					answer="Los PERTE (Proyectos Estratégicos para la Recuperación y Transformación Económica) son un nuevo instrumento de colaboración público privada en los que colaboran las distintas administraciones públicas, empresas y centros de investigación. Su objetivo es impulsar grandes iniciativas que contribuyan claramente a la transformación de la economía española."
					href="https://planderecuperacion.gob.es/preguntas/que-son-los-perte"
				/>

				<Question
					question="¿Qué es ERASMUS+?"
					answer="The 2021-2027 Erasmus+ is more inclusive, more digital, and more green. It has opportunities for all ages, and more choice for organisations."
					href="https://erasmus-plus.ec.europa.eu/"
				/>

				<Question
					question="La Asamblea General adopta la Agenda 2030 para el Desarrollo Sostenible"
					answer="La Asamblea General adopta la Agenda 2030 para el Desarrollo Sostenible"
					href="https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/#"
				/>
			</div>
		</Container>
	);
};
