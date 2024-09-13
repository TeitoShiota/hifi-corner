// Importing the required modules
import Link from "next/link";

// Importing the required types
import { Product } from "@/types/product"

// Importing the required functions
import { getProductImage, getProductPrice, getProductStock } from "@/lib/productsListLib"

// Importing the required components
import ProductCardImage from "./ProductCardImage"
import ProductCardStockInfo from "./ProductCardStockInfo"
import PrimaryButton from "@/components/Buttons/PrimaryButton";

// Importing style sheet
import './product-card.scss'
import CompareButton from "@/components/Buttons/CompareButton";

export default function ProductCard({ product }: { product: Product }) {

    const productImage = getProductImage(product);
    const productPrice = getProductPrice(product);
    const productStockInfo = getProductStock(product);

    // eslint-disable-next-line no-console
    console.log(productImage);
    return (
        <Link href={'/detail/' + product.id}>
            <article className="product-card">
                <CompareButton productID={product.id} />
                <ProductCardImage images={productImage[0]} />
                <section className="product-card__content">
                    <h2 className="product-card__title">{product.name}</h2>
                    <p className="product-card__category">{product.category}</p>
                    <section className="product-card__pricing-info">
                        <p className="product-card__price">{`${'£'} ${productPrice}`}</p>
                    </section>
                    <div className="product-cta">
                        <PrimaryButton text="Add to cart" onClick={() => alert('hello world')}/>
                        <ProductCardStockInfo productStockInfo={productStockInfo} />
                    </div>
                </section>
            </article>
        </Link>
    )
}