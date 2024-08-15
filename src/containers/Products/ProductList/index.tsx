'use client';

import Product from '@/app/products/[product_id]/page';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { ProductsList } from '@/types/product';


export default function ProductList() {

    const [products, setProducts] = useState<ProductsList>([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
            });
    }, []);



    return (
        <section>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </section>
    );
}