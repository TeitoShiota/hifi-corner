'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isAuthApiError, isAuthError } from '@supabase/supabase-js'

export async function login(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)


    //FIXME - Remove redirect and return an error message instead
    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/profile')
}

export async function signup(prevState, formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs

    try {
        if (formData.get('password') !== formData.get('repeatPassword')) {
            throw new Error('Passwords do not match')
        }

        const { error } = await supabase.auth.signUp({
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            options:{
                data: {
                    firstname: formData.get('firstname') as string,
                    lastname: formData.get('lastname') as string,
                }
            }
        })

        if (isAuthApiError(error)) {
            throw new Error("API" + error)
        }

        if (isAuthError(error)) {
            alert('AuthError')
            throw new Error(error.message)
        }

        if (error) {
            throw new Error(error.message)
        }

        revalidatePath('/', 'layout')
        redirect('/profile')
    } catch (error : any) {
        return JSON.stringify({ error: error.message })
    }

    const data = {
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
}