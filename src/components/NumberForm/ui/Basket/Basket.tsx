"use client";

import { HStack, Text, VStack } from "@/components/ui";
import { useBasketStore } from "@/store/BasketStore";

export const Basket = () => {
	const { basket } = useBasketStore();
	return (
		<VStack gap={2}>
			{Object.entries(basket).length === 0 ? (
				<Text color="coolBlack">Пусто! Добавьте интереснейшую книжку!</Text>
			) : (
				basket.map(([id, value, title, price]) => (
					<HStack gap={5} key={id}>
						<Text color="coolBlack truncate ...">{title}</Text>
						<Text color="coolBlack">{value}шт.</Text>
						<Text>{value * price}руб.</Text>
					</HStack>
				))
			)}
		</VStack>
	);
};
