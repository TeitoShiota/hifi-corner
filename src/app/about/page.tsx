import AboutInfo from '@/containers/AboutInfo';
import history1 from "@/assets/images/history_1.png"
import history2 from "@/assets/images/history_2.png"
import history3 from "@/assets/images/history_3.png"
import history4 from "@/assets/images/history_4.png"

import '@/styles/subPage.scss';

import './styles.css';

export default function About() {
    return (
        <main className="pageMain">
            <h1>OUR HISTORY</h1>
            <section className="aboutSection">
                <AboutInfo
                    picture={history1} 
                    alt={'History1'}
                    heading2="History"
                    heading3="Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, but services customers across the UK."
                    text={`Our Edinburgh branch has the longest history as an audio retailer in the UK. During recent renovations, receipts were found from Nicolson’s Gramophone Saloon dating back to 1926. In the 1950s WG Graham took over the shop and renamed it WG Graham’s Hi-Fi Corner. Upon his retirement, Graham Tiso bought the business and shortened the name to Hi-Fi Corner.
                        
                        Soon thereafter a young enthusiastic Colin MacKenzie (left), who was recommended by Linn’s own Ivor Tiefenbrun, was employed to manage the shop; with a knack for business and years of experience in the hi-fi industry, Colin would later become the owner of Hi-Fi Corner. Today, Struan
                        MacKenzie carries on the legacy as the company’s Managing Director.`}
                />
                <AboutInfo
                    picture={history2} 
                    alt={'History2'}
                    heading2="Hear The Difference"
                    heading3="Book a demonstration at our Edinburgh or Falkirk showrooms.  "
                    text={`Would you choose a quality car without a test drive? If you are familiar with the brand and have great trust in it, you might. However, our listening preferences are unique to the individual and with many of our customers new to the world of high quality sound and vision, we encourage everyone to come in to demonstrate the products they are interested in. You’ll find a relaxing and comfortable environment in both our Edinburgh and Falkirk premises where you can decide for yourself if the kit is right for you. We also offer home demonstrations on selected products.
                        
                        It's our aim to get the right product for you.
                        
                        Our experts are on hand to guide you through the differences between speakers, amplifiers and sources and provide simple solutions that suit your needs.`}
                    right
                />
                <AboutInfo
                    picture={history3} 
                    alt={'History3'}
                    heading2="Services"
                    heading3="Our passion for the products we sell and, for our customers’ satisfaction simply means that we happily offer additional services not found on the high-street."
                    text={`Home Setup - We want to ensure that the equipment you’ve purchased from us is installed correctly and sounds perfect; and we happily provide this service throughout the UK.
                        
                        Part Exchange – To help you upgrade your system, we offer our part-exchange program. We can offer a set price, or sell your old kit on your behalf.

                        Turntable Doctor – Our turntable experts have been trained by the manufacturers for initial setup, long-term maintenance, and upgrading your high quality turntables.

                        Record Cleaning Service – Have some old records that need a bit of love? We offer Scotland’s very own professional record cleaning service with our bespoke Pro-Ject record cleaner.`}
                />
                <AboutInfo
                    picture={history4} 
                    alt={'History4'}
                    heading2="Tailored For You"
                    heading3="We look forward to customising a system to meet your needs."
                    text={`We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone. 
                        
                        If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.
                        
                        One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.   `}
                    right
                />
            </section>
        </main>
    );
}