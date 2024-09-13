import ProductList from "@/containers/Products/ProductList";
import ProductsSortBy from "@/containers/Products/ProductsSortBy";

import './products-page.scss';

export default function ProductsPage() {
    return (
        <main>
            <h1>Product</h1>
            <section className="products-page">
                <section className="products-sort">
                    <ProductsSortBy />
                </section>
                <section className="products-list">
                    <ProductList />
                </section>
            </section>
        </main>
    );
}