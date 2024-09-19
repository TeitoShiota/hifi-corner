'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "../actions";


import Link from "next/link";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import '@/styles/subPage.scss';
import '@/styles/forms.scss';
import '@/styles/checkboxes.scss';

export default function Login() {


    return(
        <main className="pageMain">
            <h1>LOGIN</h1>
            <section>
                <h2 id="loginHeader">REGISTERED CUSTOMERS</h2>
                <p className="loginText">If you have an account, sign in with your email address.</p>

                <form className='form'>
                    <label htmlFor="email">E-mail <span className='orange'>*</span></label>
                    <input 
                        type="email"
                        name="email" 
                        id="email"
                        className='inputField'
                        required
                    />
                    <label htmlFor="password">Password <span className='orange'>*</span></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className='inputField'
                        required
                    />
                    <div className="checkboxes checkboxes__spacing">
                        <input type="checkbox" name="fav_language" value="CSS"></input>
                        <p>Remember me</p>
                    </div>
                    <PrimaryButton
                        text="Sign in"
                        className="primaryButton__alignLeft"
                        formAction={login}
                    />
                    <Link href={'/'} className="loginText">Forgot your password?</Link>
                </form>
            </section>
            <section id="newCustomer">
                <h3>NEW CUSTOMERS</h3>
                <p>Creating an account has many benefits: check out faster, track orders and more.</p>
                <PrimaryButton 
                    text="Create an Account" 
                    onClick={() => window.location.href = '/auth/signup'} 
                    className="primaryButton__alignLeft primaryButton__large"
                />
            </section>
        </main>
    )
}