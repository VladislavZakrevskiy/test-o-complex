import { FC } from "react";
import { Flex, FlexProps } from "./Flex";

export const HStack: FC<FlexProps> = (props) => {
	return (
		<Flex direction="row" {...props}>
			{props.children}
		</Flex>
	);
};
