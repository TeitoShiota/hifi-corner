import CartProgressBox from "@/components/Cart/CartProgressBox";

import './cart-progress-bar.scss';

export default function CartProgressBar() {
    return (    
        <section className='cart-progress-bar'>
            <CartProgressBox type="cart" highlight/>
            <CartProgressBox type="card"/> 
            <CartProgressBox type="Receipt"/>
            <div className="cart-progress-line"></div>
        </section>
    )
}