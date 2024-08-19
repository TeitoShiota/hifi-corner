
import '@/styles/homePage.scss';

export default function Home() {
    return (
        <main className="main">
            {/* Video */}
            {/* popular products */}
            <section className="companyInfo">
                <div className='companyDescription'>
                    <h3>What we do</h3>
                    <p>We look forward to customising a system to meet your needs.
                    <br />
                    We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.
                    <br />
                    If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.
                    <br />
                    One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams. </p>
                </div>
                <div className='openingHours'>
                    <h3>Opening hours</h3>
                    <ul>
                        <b>Edinburgh</b>
                        <li>2 Joppa Rd,Edinburgh, EH15 2EU</li>
                        <li>Monday to Friday: 10:00am - 5:30pm</li>
                        <li>Saturday: 10:00am - 5:30pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    <ul>
                        <b>Falkirk</b>
                        <li>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</li>
                        <li>Monday to Friday: 10:00am - 5:30pm</li>
                        <li>Saturday - By appointment only</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
