'use client';

import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

import '@/styles/subPage.scss';
import '@/styles/forms.scss';
import '@/styles/checkboxes.scss';

export default function createAccount() {
    return (
        <main className="pageMain">
            <h1>CREATE AN ACCOUNT</h1>
            <section>
                <form action="" className='form'>
                    <h2>Create New Customer Account</h2>
                    <label>First name <span className='orange'>*</span></label>
                    <input type="text" className='inputField'/>
                    <label>Last name <span className='orange'>*</span></label>
                    <input type="text" className='inputField'/>
                    <label>E-mail <span className='orange'>*</span></label>
                    <input type="email" className='inputField'/>
                    <label>Password <span className='orange'>*</span></label>
                    <input type="password" className='inputField'/>
                    <label>Repeat password <span className='orange'>*</span></label>
                    <input type="password" className='inputField'/>
                    <div className="checkboxes">
                        <input type="checkbox" name="fav_language" value="CSS"></input>
                        <p>By using this form you agree with the storage and handling of your data by this website.</p>
                    </div>
                    <div className="checkboxes checkboxes__spacing">
                        <input type="checkbox" name="fav_language" value="CSS"></input>
                        <p>Sign up for newsletter</p>
                    </div>
                    <PrimaryButton 
                        text="Create an Account" 
                        onClick={() => alert('hello world')} 
                        className="primaryButton__alignLeft primaryButton__large"
                    />
                </form>
            </section>
            <p className='affiliate-links'>Visit our sister companies <Link href="#" className='orange'>Home Sound</Link> and <Link href="#" className='orange'>The Movie Rooms</Link> part of the Hi-Fi Corner Group. </p>
        </main>
    );
}