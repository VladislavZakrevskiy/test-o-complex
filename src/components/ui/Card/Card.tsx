import { cn } from "@/utils/classNames";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
	children: ReactNode;
	className?: string;
}

export const Card: FC<CardProps> = ({ children, className, ...otherProps }) => {
	return (
		<div className={cn("p-3 bg-coolGray rounded-2xl", {}, [className])} {...otherProps}>
			{children}
		</div>
	);
};
