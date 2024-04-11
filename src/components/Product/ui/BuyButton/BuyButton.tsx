"use client";

import { Button, HStack, Input } from "@/components/ui";
import { useBasketStore } from "@/store/BasketStore";
import { FC, useEffect, useState } from "react";
import { Product } from "../../model/types/Product";

interface BuyButtonProps {
	product: Product;
}

export const BuyButton: FC<BuyButtonProps> = ({ product }) => {
	const { id, title, price } = product;
	const [productNumber, setProductNumber] = useState<number>(0);
	const { changeBasketItem, deleteBasketItem } = useBasketStore();

	useEffect(() => {
		if (productNumber !== 0) {
			changeBasketItem(id, productNumber, title, price);
		}
		if (productNumber === 0) {
			deleteBasketItem(id);
		}
	}, [productNumber]);

	if (productNumber !== 0) {
		return (
			<HStack gap={2}>
				<Button onClick={() => setProductNumber((prev) => prev - 1)}>-</Button>
				<Input
					onChange={(data) => setProductNumber(Number(data))}
					value={String(productNumber)}
					type="number"
					className="w-full"
				/>
				<Button onClick={() => setProductNumber((prev) => prev + 1)}>+</Button>
			</HStack>
		);
	}

	return <Button onClick={() => setProductNumber(1)}>Купить</Button>;
};
