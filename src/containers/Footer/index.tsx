import Link from 'next/link';
import Image from 'next/image';
import phone from '@/assets/icons/phone.svg';
import cards from '@/assets/images/cards.png';
import SoMe from '../SoMe';

import facebook from '@/assets/icons/soMe/facebook.svg';
import twitter from '@/assets/icons/soMe/twitter.svg';
import instagram from '@/assets/icons/soMe/instagram.svg';
import youtube from '@/assets/icons/soMe/youtube.svg';

import '@/styles/footer.scss';

export default function Footer() {
    return (
        <footer>
            <section className="footerInfoContainer">
                <nav>
                    <div>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/products'}>Shop</Link>
                        <Link href={'/about'}>About Us</Link>
                    </div>
                    <div>
                        <Link href={'/faq'}>Returns & Refunds</Link>
                        <Link href={'/faq'}>Delivery</Link>
                        <Link href={'/faq'}>Privacy Policy</Link>
                        <Link href={'/faq'}>Term & Conditions</Link>
                    </div>
                </nav>
                <ul>
                    <h3>Contact</h3>
                    <li>
                        <b>2 Joppa Rd, Edinburgh, EH15 2EU</b>
                        <div className='phoneContact'>
                            <Image
                                src={phone}
                                alt="Hi Fi Corner Logo"
                            />
                            <p>0131 556 7901</p>
                        </div>
                    </li>
                    <li>
                        <b>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</b>
                        <div className='phoneContact'>
                            <Image
                                src={phone}
                                alt="Hi Fi Corner Logo"
                            />
                            <p>01324 629 011</p>
                        </div>
                    </li>
                    <div className="soMeIcons">
                        <SoMe href={"facebook.com"} svg={facebook} alt='Facebook'/>
                        <SoMe href={"youtube.com"} svg={youtube} alt='Youtube'/>
                        <SoMe href={"twitter.com"} svg={twitter} alt='Twitter'/>
                        <SoMe href={"instagram.com"} svg={instagram} alt='Instagram'/>
                    </div>
                </ul>
            </section>
            <hr />
            <section className='footerCredits'>
                <Image
                    src={cards}
                    alt="Cards"
                    style={{
                        width: '10rem',
                        height: 'auto',
                    }}
                />
                <div id="footerText">                
                    <p>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                    <p>Designed & Built by WU07 :) </p>
                </div>
            </section>
        </footer>
    );
}