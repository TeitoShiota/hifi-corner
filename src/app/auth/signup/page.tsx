'use client';

import { useState } from 'react';

import { signup } from '../actions';

import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

import '@/styles/subPage.scss';
import '@/styles/forms.scss';
import '@/styles/checkboxes.scss';
import { useFormState } from 'react-dom';

export default function Signup() {

    const [formData, setFormData] = useState<{
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        repeatPassword: string
    }>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleErrors(){
        console.log('error')
        alert(message)
    }


    const [message, signupAction] = useFormState(signup, null);

    return (
        <main className="pageMain">
            <h1>CREATE AN ACCOUNT</h1>
            <section>
                <form action={signupAction} onErrorCapture={handleErrors} className='form'>
                    <h2>Create New Customer Account</h2>
                    <label htmlFor=''>First name <span className='orange'>*</span></label>
                    <input 
                        type="text"
                        name='firstName'
                        id='firstName'
                        className='inputField'
                        required
                    />
                    <label htmlFor='lastname'>Last name <span className='orange'>*</span></label>
                    <input 
                        type="text"
                        name='lastName'
                        id='lastName'
                        className='inputField'
                        required
                    />
                    <label htmlFor='email'>E-mail <span className='orange'>*</span></label>
                    <input 
                        type="email"
                        name='email'
                        id='email'
                        className='inputField'
                        required
                    />
                    <label htmlFor='password'>Password <span className='orange'>*</span></label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        className='inputField'
                        required
                    />
                    <label>Repeat password <span className='orange'>*</span></label>
                    <input
                        type="password"
                        name='repeatPassword'
                        id='repeatPassword'
                        className='inputField'
                        required
                        />
                    <div className="checkboxes">
                        <input 
                            type="checkbox"
                            name="fav_language"
                            value="CSS"
                            required
                        />
                        <p>By using this form you agree with the storage and handling of your data by this website.</p>
                    </div>
                    <div className="checkboxes checkboxes__spacing">
                        <input 
                            type="checkbox"
                            name="fav_language"
                            value="CSS"
                        />
                        <p>Sign up for newsletter</p>
                    </div>
                    <PrimaryButton 
                        text="Create an Account" 
                        className="primaryButton__alignLeft primaryButton__large"
                    />
                </form>
                {!!message && <p>{message}</p>}
            </section>
            <p className='affiliate-links'>Visit our sister companies <Link href="#" className='orange'>Home Sound</Link> and <Link href="#" className='orange'>The Movie Rooms</Link> part of the Hi-Fi Corner Group. </p>
        </main>
    );
}