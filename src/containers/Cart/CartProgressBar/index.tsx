import CartProgressBox from "@/components/Cart/CartProgressBox";

import './cart-progress-bar.scss';

export default function CartProgressBar() {
    return (    
        <>
            <div className='cart-progress-bar'>
            <div className="cart-progress-line"></div>
                <CartProgressBox type="cart" highlight/>
                <CartProgressBox type="card"/> 
                <CartProgressBox type="Receipt"/>
            </div>
        </>
    )
}