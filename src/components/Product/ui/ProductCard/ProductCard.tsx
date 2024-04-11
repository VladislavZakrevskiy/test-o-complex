import React, { FC } from "react";
import { Product } from "../../model/types/Product";
import { Card, Text, VStack } from "@/components/ui";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { BuyButton } from "../BuyButton/BuyButton";

interface ProductCardProps {
	product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<Card className="flex flex-col justify-between">
			<ProductDescription product={product} />
			<VStack className="text-center" gap={3}>
				<Text color="coolBlack" className="text-3xl">
					Цена: {product.price}
				</Text>
				<BuyButton product={product} />
			</VStack>
		</Card>
	);
};
