import Image from 'next/image';
import Logo from '@/assets/icons/logo_sml.svg';

import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Image
                src={Logo}
                alt="Hi Fi Corner Logo"
                sizes="100vw"
            />
            <Link href={'/shop'}>SHOP</Link>
            <Link href={'/about'}>ABOUT US</Link>
            <Link href={'/contact'}>CONTACT</Link>
        </nav>
    );
}