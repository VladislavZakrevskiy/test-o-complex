import { cn } from "@/utils/classNames";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonAttr = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "className">;

interface ButtonProps extends ButtonAttr {
	onClick?: () => void;
	className?: string;
	before?: ReactNode;
	after?: ReactNode;
	children: ReactNode;
	formatType?: "square" | "rectangle";
}

export const Button: FC<ButtonProps> = ({
	after,
	before,
	children,
	className,
	onClick,
	formatType = "rectangle",
	...otherProps
}) => {
	const getPadding = () => {
		switch (formatType) {
			case "square":
				return "pt-3 pb-3 pr-3 pl-3";
			case "rectangle":
				return "pt-3 pb-3 pr-6 pl-6";
		}
	};

	return (
		<button
			onClick={onClick}
			className={cn(`bg-coolBlack rounded-2xl ${getPadding()} text-coolWhite text-4xl`, {}, [className])}
			{...otherProps}
		>
			{before}
			{children}
			{after}
		</button>
	);
};
