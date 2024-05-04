import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { ComponentProps, ReactNode } from "react";

interface CardProps extends ComponentProps<"article"> {
	heading: ReactNode;
	summary: ReactNode;
	date: string;
	linkProps: LinkProps;
	imgProps: ImageProps;
}

export const Card = ({
	linkProps,
	imgProps,
	heading,
	summary,
	date,
	...props
}: CardProps) => {
	return (
		<Link {...linkProps}>
			<article
				className="flex flex-col lg:flex-row lg:h-[30svh] overflow-hidden bg-white group transition-all ease-in-out-custom duration-custom hover:bg-border/10 border border-border hover:border-accent/50"
				{...props}
			>
				<Image className="size-full object-cover" {...imgProps} />
				<div className="flex py-3 px-4 lg:py-4 lg:px-8 flex-col gap-4 size-full max-w-[60ch]">
					<h3 className="font-semibold text-accent text-lg">{heading}</h3>
					<span className="leading-[0.8] italic font-light text-accent">
						{date}
					</span>
					<p className="font-light line-clamp-4">{summary}</p>
				</div>
			</article>
		</Link>
	);
};
