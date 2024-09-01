'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import '@/styles/subPage.scss';
import '@/styles/forms.scss';
import '@/styles/checkboxes.scss';

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');


    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });
            if (!response.ok) {
                setError('Failed to authenticate user');
                return;
            };
            const data = await response.json();
            if (data?.token) {
                router.push('/');
            } else {
                setError('Failed to authenticate user');
            }
        } catch (err) {
            setEmail('Failed to authenticate user');
        }
    };

    return(
        <main className="pageMain">
            <h1>LOGIN</h1>
            <section>
                <h2 id="loginHeader">REGISTERED CUSTOMERS</h2>
                <p className="loginText">If you have an account, sign in with your email address.</p>

                <form onSubmit={onSubmit} className='form'>
                    <label htmlFor="email">E-mail <span className='orange'>*</span></label>
                    <input 
                        type="email" 
                        id="email"
                        className='inputField'
                        onChange={(e) => setEmail(e.target.value || '')}
                    />
                    <label htmlFor="password">Password <span className='orange'>*</span></label>
                    <input
                        type="password"
                        id="password"
                        className='inputField'
                        value={password}
                        onChange={(e) => setPassword(e.target.value || '')}
                    />
                    <div className="checkboxes checkboxes__spacing">
                        <input type="checkbox" name="fav_language" value="CSS"></input>
                        <p>Remember me</p>
                    </div>
                    <PrimaryButton
                        text="Sign in"
                        className="primaryButton__alignLeft"
                    />
                    <Link href={'/'} className="loginText">Forgot your password?</Link>
                    {error && <p className='error'>{error}</p>}
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