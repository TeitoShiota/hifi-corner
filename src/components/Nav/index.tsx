import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href={'/products'}>SHOP</Link>
            <Link href={'/about'}>ABOUT US</Link>
            <Link href={'/contact'}>CONTACT</Link>
        </nav>
    );
}