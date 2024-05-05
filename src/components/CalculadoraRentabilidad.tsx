"use client";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import CurrencyInput from "react-currency-input-field";
import { cn } from "@/lib/util";

export const CalculadoraRentabilidad = () => {
	const [investment, setInvestment] = useState<string | undefined>(undefined);
	const [monthly, setMonthly] = useState<string | undefined>(undefined);
	const [result, setResult] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (investment === undefined || monthly === undefined) return;
		const monthsROI = Number(investment) / Number(monthly);
		setResult(Math.floor(monthsROI));
	}, [investment, monthly]);

	return (
		<Container className="items-center max-lg:!px-2">
			<div className="bg-accent py-4 px-6 items-center flex flex-col gap-4 w-fit rounded-md drop-shadow-lg border-accent">
				<h3 className="text-yellow-400 max-lg:text-center text-4xl pb-2 font-medium">
					Calculadora de rentabilidad de inversión
				</h3>

				<div className="flex gap-2 justify-between lg:items-center lg:w-full max-lg:flex-col">
					<label
						htmlFor="inversion"
						className="pr-4 font-medium text-white text-2xl"
					>
						Inversión a rentabilizar
					</label>
					<CurrencyInput
						name="inversion"
						className="py-1 px-3 border-accent border rounded-md"
						placeholder="Inversión total en €"
						suffix="€"
						groupSeparator="."
						decimalSeparator=","
						onValueChange={(e) => setInvestment(e)}
						value={investment}
					/>
				</div>

				<div className="flex gap-2 justify-between lg:items-center lg:w-full max-lg:flex-col">
					<label
						htmlFor="years"
						className="pr-4 font-medium text-white text-2xl"
					>
						Previsión ingresos por mes
					</label>
					<CurrencyInput
						name="years"
						className="py-1 px-3 border-accent border rounded-md"
						placeholder="Ingresos por mes en €"
						groupSeparator="."
						decimalSeparator=","
						suffix="€"
						onValueChange={(e) => setMonthly(e)}
						value={monthly}
					/>
				</div>

				<div className="flex flex-col my-4 border-white rounded-md border px-4 w-fit self-center py-2 justify-center gap-2 lg:items-center items-start">
					{result ? (
						<>
							<span className="pr-4 text-white font-medium text-2xl">
								Plazo recuperación:
							</span>
							<span
								className={cn(
									"pr-4 font-medium text-2xl",
									result <= 24 ? "text-green-300" : "text-orange-300",
								)}
							>
								{result} meses
							</span>
						</>
					) : (
						<span className="pr-4 font-medium text-white/80 text-2xl">
							Rellena ambos campos
						</span>
					)}
				</div>
			</div>
		</Container>
	);
};
