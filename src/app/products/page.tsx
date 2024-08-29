import ProductList from "@/containers/Products/ProductList";
import ProductsSortBy from "@/containers/Products/ProductsSortBy";

import '@/containers/Products/ProductsSortBy/products-sort-by.scss';

export default function ProductsPage() {
    return (
        <main>
            <h1>Product</h1>
            <div className="products-page">
                <section className="products-sort">
                    <ProductsSortBy />
                </section>
                <section className="products-list">
                    <ProductList />
                </section>
            </div>
        </main>
    );
}