'use client';

import { useFetchMostPopularProducts } from "@/hooks/useFetchMostPopularProducts";


import ProductCard from "@/components/Products/ProductCard";



export default function MostPopularProducts() {
    const { data, isLoading, isError } = useFetchMostPopularProducts();

    if (isError) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>

    return (
        <>
            {data.products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
}