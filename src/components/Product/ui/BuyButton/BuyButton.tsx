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
	const { changeBasketItem, deleteBasketItem, basket } = useBasketStore();
	const productNumber = basket.find(([key]) => key === id) ? Number(basket.find(([key]) => key === id)?.[1]) : 0;

	if (productNumber !== 0) {
		console.log(id, productNumber);
	}

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
				<Button onClick={() => changeBasketItem(id, productNumber - 1, title, price)}>-</Button>
				<Input
					onChange={(data) => changeBasketItem(id, Number(data), title, price)}
					value={String(productNumber)}
					type="number"
					className="w-full"
				/>
				<Button onClick={() => changeBasketItem(id, productNumber + 1, title, price)}>+</Button>
			</HStack>
		);
	}

	return <Button onClick={() => changeBasketItem(id, 1, title, price)}>Купить</Button>;
};
