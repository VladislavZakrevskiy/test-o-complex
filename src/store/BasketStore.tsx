import { LOCALSTORAGE_STORE_KEY } from "@/consts/localStorage";
import { create } from "zustand";

type State = {
	basket: [id: number, value: number, title: string, price: number][];
	number: string;
};

type Action = {
	changeNumber: (newNumber: string) => void;
	changeBasketItem: (id: number, newValue: number, title: string, price: number) => void;
	deleteBasketItem: (id: number) => void;
	initStore: (jsonStore: string) => void;
};

export const useBasketStore = create<State & Action>((set) => ({
	basket: [],
	number: "",
	changeNumber: (newNumber) => set(() => ({ number: newNumber })),
	initStore: (jsonedStore) => set(() => JSON.parse(jsonedStore)),
	changeBasketItem: (id, newValue, title, price) =>
		set((store) => {
			const newItem: [id: number, value: number, title: string, price: number] = [id, newValue, title, price];
			const newStore = { ...store, basket: [...store.basket.filter(([key]) => key !== id), newItem] };
			localStorage.setItem(LOCALSTORAGE_STORE_KEY, JSON.stringify(newStore));
			console.log(newStore);
			return newStore;
		}),
	deleteBasketItem: (id) =>
		set((store) => {
			const newStore = { ...store, basket: store.basket.filter(([key]) => key !== id) };
			localStorage.setItem(LOCALSTORAGE_STORE_KEY, JSON.stringify(newStore));
			console.log(newStore);
			return newStore;
		}),
}));
