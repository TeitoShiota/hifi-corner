import Image from 'next/image';
import './cart-progress-box.scss';

import Cart from '@/assets/icons/cart.svg';
import Card from '@/assets/icons/card.svg';
import Receipt from '@/assets/icons/receipt.svg';

interface CartProgressBoxProps {
    highlight?: boolean;
    type: 'cart' | 'card' | 'Receipt';
}

const TYPE_MAP = {
    cart: {
        icon: Cart,
        alt: 'Icon of Cart'
    },
    card: {
        icon: Card,
        alt: 'Icon of Card'
    },
    Receipt: {
        icon: Receipt,
        alt: 'Icon of Receipt'
    }
}

export default function CartProgressBox( { type = 'cart', highlight = false} : CartProgressBoxProps) {
    return (
        <div
            className='cart-progress-box'
            data-highlighted={highlight ? 'active' : undefined}
        >

            <Image
                src={TYPE_MAP[type].icon}
                alt={TYPE_MAP[type].alt}
                datatype='svg'
            />

        </div>
    );
}