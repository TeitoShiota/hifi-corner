'use client';

// React
import { Suspense, useState } from 'react';

// Hooks
import { useFetchProductsPaginate } from '@/hooks/useFetchProductsPaginate';
import { useFetchProducts } from '@/hooks/useFetchProducts';

// Types
import { ProductsList, Product } from '@/types/product';

// Components
import Image from 'next/image';
import ProductCard from '@/components/Products/ProductCard';

// Styles
import './product-list.scss';


export default function ProductList() {
    // const [pageIndex, setPageIndex] = useState(1 as number);
    // const { data, isLoading, isError } = useFetchProductsPaginate(pageIndex);

    const { data, isLoading, isError } = useFetchProducts();

    if (isError) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>

    return (
            <section className='product-list'>
                {data.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
    );
}