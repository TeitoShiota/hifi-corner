'use client';

import { useState } from 'react';

import './products-sort-by.scss';


interface ProductsSortByOptions {
    brand: [
        {
            id: string,
            name: string
        }
    ],
    color: [
        {
            id: string,
            name: string
        }
    ],
    price: [
        {
            id: string,
            name: string
        }
    ],
}

export default function ProductsSortBy() {
    const [sortByOptions, setSortByOptions] = useState({} as ProductsSortByOptions);


    return(
        <form
            className='products-sort'
            onSubmit={(e) => e.preventDefault()}
        >
            <h2>Sort by</h2>

        </form>
    )
}