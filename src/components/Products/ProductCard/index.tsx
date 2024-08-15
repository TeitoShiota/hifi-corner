import { Product } from "@/types/product"

import ProductCardImage from "./ProductCardImage"

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="productCard">
            <ProductCardImage images={product.images} />
            <div className="productCardDetails">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </div>
    )
}