'use client';

import Link from "next/link";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import '@/styles/subPage.scss';
import '@/styles/forms.scss';
import '@/styles/checkboxes.scss';

export default function login() {

    return(
        <main className="pageMain">
            <h1>LOGIN</h1>
            <section>
                <h2 id="loginHeader">REGISTERED CUSTOMERS</h2>
                <p className="loginText">If you have an account, sign in with your email address.</p>

                <form action="" className='form'>
                    <label>First name <span className='orange'>*</span></label>
                    <input type="text" className='inputField'/>
                    <label>E-mail <span className='orange'>*</span></label>
                    <input type="email" className='inputField'/>
                    <div className="checkboxes checkboxes__spacing">
                        <input type="checkbox" name="fav_language" value="CSS"></input>
                        <p>Remember me</p>
                    </div>
                    <PrimaryButton text="Sign in" onClick={() => alert('hello world')} className="primaryButton__alignLeft"/>
                    <Link href={'/'} className="loginText">Forgot your password?</Link>
                </form>
            </section>
            <section id="newCustomer">
                <h3>NEW CUSTOMER</h3>
                <p>Creating an account has many benefits: check out faster, track orders and more.</p>
                <PrimaryButton 
                    text="Create an Account" 
                    onClick={() => window.location.href = '/createAccount'} 
                    className="primaryButton__alignLeft primaryButton__large"/>
            </section>
        </main>
    )
}