import { Text, VStack } from "@/components/ui";
import React, { FC } from "react";
import { Product } from "../../model/types/Product";
import Image from "next/image";

interface ProductDescriptionProps {
	product: Product;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
	const { description, image_url, title } = product;

	return (
		<VStack gap={3} className="text-center">
			<Image src={image_url} alt={title + " Picture"} width={300} height={450} className="w-full rounded-2xl" />
			<Text color="coolBlack" className="text-4xl truncate ..." tag="h3">
				{title}
			</Text>
			<Text color="coolBlack" className="text-2xl truncate ..." tag="p">
				{description}
			</Text>
		</VStack>
	);
};
