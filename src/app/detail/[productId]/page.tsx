'use client';
import { useFetchProductDetails } from "@/hooks/useFetchProductDetails";


import { getProductImage, getProductPrice, getProductStock } from "@/lib/productsListLib"

import Slideshow from "@/containers/Slideshow";

import './product-details.scss';

export default function Detail({ params }: { params: { productId: string } }) {
    const { productId } = params;

    const { data, isLoading, isError } = useFetchProductDetails(productId);
    console.log(data)

    
    
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {isError.message}</p>;
    
    const productImage = getProductImage(data.product);


    return (
        <main>
            <h1>PRODUCT</h1>
            <section className="product-details-section">

                <Slideshow images={productImage} />

                <div>
                    <h2>{data?.product.name}</h2>
                    <p>{data?.product.description}</p>
                </div>
            </section>

            <hr />

            <section>
                <h3>PRODUCT SPECIFICATIONS</h3>
                <table>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                    <tr>
                        <td>Product ID</td>
                        <td>{productId}</td>
                    </tr>
                </table>
            </section>
        </main>
    );
}