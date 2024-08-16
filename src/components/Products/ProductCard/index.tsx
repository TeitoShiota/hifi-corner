
// Importing the required modules


// Importing the required types
import { Product } from "@/types/product"

// Importing the required functions
import { getProductImage, getProductPrice } from "@/lib/productsListLib"

// Importing the required components
import ProductCardImage from "./ProductCardImage"

import './product-card.scss'

export default function ProductCard({ product }: { product: Product }) {

    const productImage = getProductImage(product);
    const productPrice = getProductPrice(product);

    // eslint-disable-next-line no-console
    console.log(productImage);
    return (
        <article className="product-card">
            <ProductCardImage images={productImage[0]} />
            <section className="product-card__content">
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__description">{product.category}</p>
                <p className="product-card__price">{`${'£'} ${productPrice}`}</p>
                <button
                    className="product-card__button"
                    type="button"
                >add to cart</button>
            </section>
        </article>
    )
}