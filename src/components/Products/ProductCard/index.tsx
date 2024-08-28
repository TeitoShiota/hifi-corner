// Importing the required modules
import Link from "next/link";


// Importing the required types
import { Product } from "@/types/product"

// Importing the required functions
import { getProductImage, getProductPrice, getProductStock } from "@/lib/productsListLib"

// Importing the required components
import ProductCardImage from "./ProductCardImage"
import ProductCardStockInfo from "./ProductCardStockInfo"

import './product-card.scss'

export default function ProductCard({ product }: { product: Product }) {

    const productImage = getProductImage(product);
    const productPrice = getProductPrice(product);
    const productStockInfo = getProductStock(product);

    // eslint-disable-next-line no-console
    console.log(productImage);
    return (
        <article className="product-card">
            <ProductCardImage images={productImage[0]} />
            <section className="product-card__content">
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__category">{product.category}</p>
                <section className="product-card__pricing-info">
                    <p className="product-card__price">{`${'£'} ${productPrice}`}</p>
                    <ProductCardStockInfo productStockInfo={productStockInfo} />
                </section>
                <button
                    className="product-card__button"
                    type="button"
                >add to cart</button>
            </section>
        </article>
    )
}