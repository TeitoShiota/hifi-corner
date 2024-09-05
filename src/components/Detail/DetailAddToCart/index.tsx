import { useState } from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Product } from "@/types/product";

import './detail-add-to-cart.scss';

export default function DetailAddToCart({ productId }: { productId: Product['id'] }) {

    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="detailAddToCart">
            <div>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>&minus;</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <PrimaryButton
                className="primaryButton__full"
                text="Add to cart"
                onClick={() => console.log('Added to cart ' + productId)}
            />
        </div>
    )
}