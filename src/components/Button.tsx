import { cn } from "@/lib/util";
import { ComponentProps } from "react";

export const Button = ({
	className,
	children,
	...props
}: ComponentProps<"button">) => {
	return (
		<button
			className={cn(
				"bg-accent rounded-md flex items-center gap-2 w-fit px-5 py-2 text-white text-lg font-medium",
				className,
			)}
			{...props}
		>
			{children}
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
	);
};
