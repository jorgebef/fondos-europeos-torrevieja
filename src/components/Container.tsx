import { cn } from "@/lib/util";
import { ComponentProps } from "react";

export const Container = ({
	className,
	children,
	...props
}: ComponentProps<"div">) => {
	return (
		<div
			className={cn(
				"max-w-screen-2xl w-full flex p-10 lg:p-24 flex-col gap-8",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};
