import Link from 'next/link';
import Nav from "@/components/Nav";
import SearchField from "@/components/SearchField";

//Image import
import Image from 'next/image';
import Logo from '@/assets/icons/logo_sml.svg';
import User from '@/assets/icons/user.svg';
import Cart from '@/assets/icons/cart.svg';

import './header.scss';

export default function Header() {
    return (
        <header>
            <div>
                <Link href={'/'}>
                    <Image
                    src={Logo}
                    alt="Hi Fi Corner Logo"
                    />
                </Link>
                <Nav />
            </div>

            <div>
                <SearchField />
                <Link href={'/login'}>
                    <Image
                        src={User}
                        alt="User icon"
                        className="icon"
                    />
                </Link>
                
                <Image
                    src={Cart}
                    alt="Cart icon"
                    className="icon"
                />
            </div>
        </header>
    );
}