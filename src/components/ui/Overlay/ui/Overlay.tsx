import { FC } from "react";
import classes from "./Overlay.module.scss";
import { cn } from "@/utils/classNames";

interface Props {
	className?: string;
	onClick?: () => void;
}

export const Overlay: FC<Props> = ({ className, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"bg-[#666] flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 z-10 cursor-pointer opacity-60",
				{},
				[className]
			)}
		/>
	);
};
