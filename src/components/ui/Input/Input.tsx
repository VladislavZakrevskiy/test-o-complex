import { cn } from "@/utils/classNames";
import { FC, InputHTMLAttributes, MutableRefObject, RefObject } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "className">;

interface InputProps extends HTMLInputProps {
	onChange?: (data: string) => void;
	name?: string;
	value?: string;
	className?: string;
}

export const Input: FC<InputProps> = ({ name, onChange, value, className, ...otherProps }) => {
	return (
		<input
			className={cn(`text-4xl text-coolWhite bg-coolBlack text-center w-auto p-3 rounded-2xl`, {}, [className])}
			type="text"
			onChange={(e) => onChange?.(e.target.value)}
			value={value}
			name={name}
			{...otherProps}
		/>
	);
};
