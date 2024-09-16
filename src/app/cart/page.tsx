import PrimaryButton from "@/components/Buttons/PrimaryButton"
import CartProgressBar from "@/containers/Cart/CartProgressBar"


export default function Cart() {

    return (
        <main>
            <CartProgressBar />

            <h1>Cart</h1>

            <p>Sub total <span>xxxxx</span></p>
            <PrimaryButton text='Go to payment'/>    {/* link='checkout' /> */}

        </main>
    )
}