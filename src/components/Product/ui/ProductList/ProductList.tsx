"use client";
import { FC, useEffect, useRef, useState } from "react";
import { Product } from "../../model/types/Product";
import { ProductCard } from "../ProductCard/ProductCard";
import InfiniteScroll from "react-infinite-scroller";
import { HStack, Loader } from "@/components/ui";
import { useBasketStore } from "@/store/BasketStore";
import { LOCALSTORAGE_STORE_KEY } from "@/consts/localStorage";

interface ProductListProps {
	products: Product[];
	fetchItems: (page?: number) => Promise<{ page: number; amount: number; total: number; products: Product[] }>;
}

export const ProductList: FC<ProductListProps> = ({ products, fetchItems }) => {
	const fetching = useRef(false);
	const [pages, setPages] = useState([products]);
	const items = pages.flatMap((page) => page);

	const loadMore = async (page: number) => {
		if (!fetching.current) {
			try {
				fetching.current = true;

				const data = await fetchItems(page);
				setPages((prev) => [...prev, data.products]);
				console.log(pages);
			} finally {
				fetching.current = false;
			}
		}
	};

	return (
		<InfiniteScroll
			className="grid md:grid-cols-3 grid-cols-1 gap-5"
			hasMore
			pageStart={1}
			loadMore={loadMore}
			loader={
				<HStack justifyContent="center" alignItems="center" key="loader">
					<Loader size="superLarge" />
				</HStack>
			}
			element="div"
		>
			{items.map((product) => (
				<ProductCard product={product} key={product.id} />
			))}
		</InfiniteScroll>
	);
};

// <div className="grid grid-cols-3 gap-5">
// 			{products.map((product) => (
// 				<ProductCard product={product} key={product.id} />
// 			))}
// 		</div>
