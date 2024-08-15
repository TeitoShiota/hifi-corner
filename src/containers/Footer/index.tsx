import Link from 'next/link';
import Image from 'next/image';

import Cards from '@/assets/images/cards.png';

export default function Footer() {
    return (
        <footer>
            <section>
                <nav>
                    <Link href={'/shop'}>Home</Link>
                    <Link href={'/about'}>Shop</Link>
                    <Link href={'/contact'}>About Us</Link>
                </nav>
                <ul>
                    <li>Returns & Refunds</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    <li>Term & Conditions</li>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <li>
                        <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                        <p>*PHONE* 0131 556 7901</p>
                    </li>
                    <li>
                        <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                        <p>*PHONE* 01324 629 011</p>
                    </li>
                    <ul>
                        <li>*</li>
                        <li>*</li>
                        <li>*</li>
                        <li>*</li>
                    </ul>
                </ul>
            </section>
            
            <section>
                <Image
                    src={Cards}
                    alt="Picture of the author"

                    style={{
                        width: '10rem',
                        height: 'auto',
                      }}
                />

                <>                
                    <p>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                    <p>Designed & Built by WU07 :) </p>
                </>
            </section>
        </footer>
    );
}