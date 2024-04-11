import { NumberForm } from "@/components/NumberForm";
import { Product, ProductList } from "@/components/Product";
import { HStack } from "../components/ui/Stack/HStack";
import { Feedbacks } from "@/components/Feedback";

async function fetchItems(page = 0) {
	"use server";

	const data = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=10`);
	const jsonedBody = await data.json();
	return jsonedBody;
}

export default async function Home() {
	const products: { page: number; amount: number; total: number; products: Product[] } = await fetchItems();

	return (
		<main className="p-5">
			<div className="m-5 grid grid-cols-2 gap-2">
				<Feedbacks />
			</div>
			<HStack justifyContent="center">
				<NumberForm />
			</HStack>
			<ProductList products={products.products} fetchItems={fetchItems} />
		</main>
	);
}
