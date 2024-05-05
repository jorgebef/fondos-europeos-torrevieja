import { Card } from "@/components/Card";
import presidencia_GVA from "@/../public/presidencia-GVA.jpeg";
import educacion_GVA from "@/../public/educacion-img.jpeg";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/FAQ";
import { CalculadoraRentabilidad } from "@/components/CalculadoraRentabilidad";

export default function Home() {
	return (
		<main className="flex pt-navbar flex-col items-center">
			<Hero />

			<CalculadoraRentabilidad />

			<InfoSection />

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
							d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
						/>
					</svg>
					Últimas noticias
				</h2>

				<Card
					heading="Nuria Montes destaca la próxima convocatoria de 21 millones en ayudas al impulso de la sostenibilidad turística de fondos Next Generation EU"
					summary="La consellera de Innovación, Industria, Comercio y Turismo, Nuria Montes, ha anunciado que su departamento convocará en breve un nuevo paquete de ayudas de los fondos europeos Next Generation EU enfocados al impulso de la sostenibilidad turística."
					date="24/04/2024 - GVA"
					imgProps={{
						src: presidencia_GVA,
						alt: "Presidencia anuncio plan turismo",
					}}
					linkProps={{
						href: "https://presidencia.gva.es/es/web/gvanext/inicio/-/asset_publisher/1oDQCiWJxBAP/content/nuria-montes-destaca-la-pr%25C3%25B3xima-convocatoria-de-21-millones-en-ayudas-al-impulso-de-la-sostenibilidad-tur%25C3%25ADstica-de-fondos-next-generation-eu?_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_assetEntryId=381747683&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_redirect=https://presidencia.gva.es/es/web/gvanext/inicio?p_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_cur%3D0%26p_r_p_resetCur%3Dfalse%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_assetEntryId%3D381747683",
					}}
				/>

				<Card
					heading="Educación acredita en Competencia Digital, en los niveles A1 y A2, a más de 70.000 docentes de la Comunitat Valenciana"
					summary="La Conselleria de Educación, Universidades y Empleo ha realizado el proceso de acreditación en Competencia Digital Docente (CDD) en los niveles A1 y A2.

En esta primera fase se han acreditado 73.082 docentes, de los cuales 58.953 lo han hecho en el nivel A1 y 14.129 en el nivel A2. La acreditación de la Competencia Digital Docente funciona como la de idiomas, va desde un nivel A1, básico, a un nivel C2, avanzado."
					date="20/04/2024 - GVA"
					imgProps={{
						src: educacion_GVA,
						alt: "Presidencia anuncio plan turismo",
					}}
					linkProps={{
						href: "https://presidencia.gva.es/es/web/gvanext/inicio/-/asset_publisher/1oDQCiWJxBAP/content/educaci%25C3%25B3n-acredita-en-competencia-digital-en-los-niveles-a1-y-a2-a-m%25C3%25A1s-de-70.000-docentes-de-la-comunitat-valenciana?_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_assetEntryId=381628195&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_redirect=https://presidencia.gva.es/es/web/gvanext/inicio?p_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_cur%3D0%26p_r_p_resetCur%3Dfalse%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_1oDQCiWJxBAP_assetEntryId%3D381628195",
					}}
				/>
			</Container>
		</main>
	);
}
