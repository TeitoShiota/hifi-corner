'use client';

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Link from "next/link";

import '@/styles/subPage.scss';

export default function login() {

    return(
        <main className="pageMain">
            <h1>LOGIN</h1>
            <section>
                <h2>REGISTERED COSTUMERS</h2>
                <p>If you have an account, sign in with your email address.</p>

                <form action="" className='form'>
                    <label>First name <span className='orange'>*</span></label>
                    <input type="text" className='inputField'/>
                    <label>E-mail <span className='orange'>*</span></label>
                    <input type="email" className='inputField'/>
                    <div>
                        <input type="checkbox" name="fav_language" value="CSS"></input>
                        <label> Remember me</label>
                    </div>
                    <PrimaryButton text="Sign in" onClick={() => alert('hello world')} className="primaryButton__alignLeft"/>
                    <Link href={'/'}>Forgot your password?</Link>
                </form>
            </section>
            <section>

            </section>
        </main>
    )
}