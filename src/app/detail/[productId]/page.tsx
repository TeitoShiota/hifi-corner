'use client';
import { useFetchProductDetails } from "@/hooks/useFetchProductDetails";

export default function Detail({ params }: { params: { productId: string } }) {
    const { productId } = params;

    const { data, isLoading, isError } = useFetchProductDetails(productId);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {isError.message}</p>;

    return (
        <main>
            <h1>Detail</h1>
            <p>Product ID: {productId}</p>
        </main>
    );
}