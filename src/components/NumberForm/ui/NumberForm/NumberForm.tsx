"use client";
import { Button, Card, HStack, VStack } from "@/components/ui";
import React, { useState } from "react";
import { Text } from "../../../ui/Text/Text";
import { Basket } from "../Basket/Basket";
import { NumberInput } from "../NumberInput/NumberInput";
import { useBasketStore } from "@/store/BasketStore";
import axios from "axios";
import { Modal } from "@/components/ui/Modal";

export const NumberForm = () => {
	const { basket, number } = useBasketStore();
	const [error, setError] = useState<string[]>([]);
	const [response, setResponse] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const onSubmit = async () => {
		setError([]);
		setResponse(2);
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
		const response = await axios.post("http://o-complex.com:1337/order", { ...body });
		setResponse(response.data.success);
		setIsModalOpen(true);
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
				<HStack gap={4} className="md:flex-row flex-col">
					<NumberInput />
					<Button className="text-xl md:text-4xl" type="submit">
						Заказать
					</Button>
				</HStack>
			</form>

			<VStack gap={2}>
				{error.map((error) => (
					<Text style={{ color: "red" }} key={error}>
						{error}
					</Text>
				))}
			</VStack>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<Text>{response ? "Успешно!" : "Проблемы на сервере! Чиним все, чтоюы вы могли заказать лучшую книгу!"}</Text>
			</Modal>
		</Card>
	);
};
