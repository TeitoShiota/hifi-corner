'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { ProductsList, Product } from '@/types/product';
import ProductCard from '@/components/Products/ProductCard';


import './product-list.scss';

export default function ProductList() {

    const [products, setProducts] = useState<ProductsList>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/api/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className='product-list'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}