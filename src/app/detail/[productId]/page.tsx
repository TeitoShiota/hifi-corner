'use client';

import { useState } from 'react';

import { useFetchProductDetails } from "@/hooks/useFetchProductDetails";

import { getProductImage, getProductPrice, getProductStock } from "@/lib/productsListLib"

import Slideshow from "@/containers/Slideshow";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ProductCardStockInfo from "@/components/Products/ProductCard/ProductCardStockInfo";
import DetailAddToCart from "@/components/Detail/DetailAddToCart";
import DetailVariantSelectorButton from "@/components/Detail/DetailVariantSelector";

import './product-details.scss';

export default function Detail({ params }: { params: { productId: string } }) {
    const { productId } = params;
    const [activeVariant, setActiveVariant] = useState('black'); // initialize with the first color variant

    const { data, isLoading, isError } = useFetchProductDetails(productId);
    console.log(data)
    
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {isError.message}</p>;
    

    const productImage = getProductImage(data.product);
    const productPrice = getProductPrice(data.product);
    const productStockInfo = getProductStock(data.product);

    const handleVariantChange = (variant: string) => {
        setActiveVariant(variant);
      };
    
    return (
        <main>
            <h1>PRODUCT</h1>
            <section className="product-details-section">
                <Slideshow images={productImage} />
                <div>
                    <h2>{data?.product.name}</h2>
                    <p>{data?.product.description}</p>
                    <div className="detailVariantSelector_container">
                        <DetailVariantSelectorButton 
                            color="black" 
                            text="Black"
                            active={activeVariant === 'black'} 
                            onClick={() => handleVariantChange('black')}  
                        />
                        <DetailVariantSelectorButton 
                            color="silver" 
                            text="Silver" 
                            active={activeVariant === 'silver'} 
                            onClick={() => handleVariantChange('silver')} 
                        />
                        <DetailVariantSelectorButton 
                            color="gold" 
                            text="Gold" 
                            active={activeVariant === 'gold'} 
                            onClick={() => handleVariantChange('gold')} 
                        />
                    </div>

                    <div className="product-status">
                        <p className="product-card__price">{`${'£'} ${productPrice}`}</p>
                        <ProductCardStockInfo productStockInfo={productStockInfo} />
                    </div>
                    
                    <DetailAddToCart productId={productId} />
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