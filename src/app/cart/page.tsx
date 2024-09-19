import PrimaryButton from "@/components/Buttons/PrimaryButton"
import CartProgressBar from "@/containers/Cart/CartProgressBar"

import '@/styles/subPage.scss'

export default function Cart() {

    return (
        <main className="pageMain">
            <CartProgressBar />

            <h1>Cart</h1>

            <p>Sub total <span className="orange">xxxxx</span></p>
            <PrimaryButton text='Go to payment'/>    {/* link='checkout' /> */}

        </main>
    )
}