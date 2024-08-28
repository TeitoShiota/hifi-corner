'use client';

import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

import '@/styles/subPage.scss';
import '@/styles/forms.scss';

export default function contact() {
    return (
        <main className="pageMain">
            <h1>GET IN TOUCH WITH US</h1>
            <section>
                <form action="" className='form'>
                    <label>Full name <span className='orange'>*</span></label>
                    <input type="text" className='inputField'/>
                    <label>E-mail <span className='orange'>*</span></label>
                    <input type="email" className='inputField'/>
                    <label>Subject <span className='orange'>*</span></label>
                    <input type="text" className='inputField'/>
                    <label>Message <span className='orange'>*</span></label>
                    <textarea className='inputMessage'></textarea>
                    <PrimaryButton text="Submit" onClick={() => alert('hello world')} className="primaryButton__alignRight"/>
                </form>
            </section>
            <p className='affiliate-links'>Visit our sister companies <Link href="#" className='orange'>Home Sound</Link> and <Link href="#" className='orange'>The Movie Rooms</Link> part of the Hi-Fi Corner Group. </p>
        </main>
    );
}