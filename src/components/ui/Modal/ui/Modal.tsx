import { FC, ReactNode } from "react";
import classes from "./Modal.module.scss";
import { useModal } from "@/utils/hooks";
import { cn, Mods } from "@/utils/classNames/classNames";
import { Portal } from "../../Portal";
import { Overlay } from "../../Overlay";

interface Props {
	className?: string;
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

export const Modal: FC<Props> = ({ className, children, isOpen, onClose, lazy }) => {
	const { closeHandler, isClosing, isMounting } = useModal({
		isOpen,
		onClose,
		animationDelay: 300,
	});

	const mods: Mods = {
		[classes.opened]: isOpen,
		[classes.isClosing]: isClosing,
	};

	if (lazy && !isMounting) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(classes.Modal, mods, [className])}>
				<Overlay onClick={closeHandler} />
				<div className={classes.content}>{children}</div>
			</div>
		</Portal>
	);
};
