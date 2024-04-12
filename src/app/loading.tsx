import { HStack, Loader } from "@/components/ui";
import React from "react";

const Loading = () => {
	return (
		<HStack className="w-screen h-screen" justifyContent="center" alignItems="center">
			<Loader />
		</HStack>
	);
};

export default Loading;
