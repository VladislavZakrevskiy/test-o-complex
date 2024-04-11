"use client";
import { Button, Card, HStack, VStack } from "@/components/ui";
import React, { useState } from "react";
import { Text } from "../../../ui/Text/Text";
import { Basket } from "../Basket/Basket";
import { NumberInput } from "../NumberInput/NumberInput";
import { useBasketStore } from "@/store/BasketStore";
import axios from "axios";

export const NumberForm = () => {
	const { basket, number } = useBasketStore();
	const [error, setError] = useState<string[]>([]);

	const onSubmit = () => {
		setError([]);
		const cart = [];
		for (const [id, value] of basket) {
			cart.push({
				id,
				quantity: value,
			});
		}

		const body = {
			phone: number,
			cart,
		};

		if (body.phone.length !== 11) {
			setError((prev) => [...prev, "Некорректный номер!"]);
			return;
		}
		if (body.cart.length === 0) {
			setError((prev) => [...prev, "Пустая корзина!"]);
			return;
		}
		axios.post("http://o-complex.com:1337/order", { ...body });
	};

	return (
		<Card className="flex flex-col gap-5 m-5">
			<VStack>
				<Text tag="h2" className="text-coolBlack text-2xl">
					Добавленные товары
				</Text>
				<Basket />
			</VStack>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<HStack gap={4}>
					<NumberInput />
					<Button type="submit">Заказать</Button>
				</HStack>
			</form>
			<VStack gap={2}>
				{error.map((error) => (
					<Text style={{ color: "red" }} key={error}>
						{error}
					</Text>
				))}
			</VStack>
		</Card>
	);
};
