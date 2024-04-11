import { cn } from "@/utils/classNames";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface TextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "className"> {
	children: ReactNode;
	className?: string;
	tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
	color?: string;
	fontSize?: number;
}

export const Text: FC<TextProps> = ({
	children,
	className,
	tag: Wrapper = "p",
	color = "coolWhite",
	fontSize,
	...otherProps
}) => {
	return (
		<Wrapper className={cn(``, {}, [className])} {...otherProps}>
			{children}
		</Wrapper>
	);
};
