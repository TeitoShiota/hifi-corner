import { Database } from '@/types/database.types';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

// Create a single supabase client for interacting with your database
// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')



export class DatabaseClient {
    // the instance of PocketBase
    client: SupabaseClient;

    constructor () {
        // instantiate PocketBase before we use
        this.client = new SupabaseClient<Database>('https://kkfzazgsoqxmncburmgb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZnphemdzb3F4bW5jYnVybWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NzE5NDYsImV4cCI6MjA0MTQ0Nzk0Nn0.FayJ-vQ8lGUhuHeo9g9Ii7_0uAI6FDFrMjgA_8W1VW0');
    }

    // authenticate handles the authentication of the user
    async authenticate (  email: string, password: string ) {
        try {
            const result = await this.client.auth.signInWithPassword({ email, password });
            // If there is no token in the result, it means something went wrong
            if (!result?.data?.user?.email) {
                throw new Error("Invalid email");
            }
            if (!result?.data?.user?.id) {
                throw new Error("Invalid email");
            }
            return result.data;
        } catch (err) {
            console.error(err);
            throw new Error("Invalid email or password");
        }
    }

    // // register handles the creation of a new user
    // async register (  email: string, password: string, passwordConfirm:string, firstname: string, lastname: string ) {
    //     try {
    //         // We provide only the minimum required fields by user create method
    //         const result = await this.client.collection("SP_HiFi_Corner").create({
    //             firstname,
    //             lastname,
    //             email,
    //             password,
    //             passwordConfirm,
    //         });

    //         return result;
    //     } catch (err) {

    //     }
    // }

    // isAuthenticated takes cookieStore from the request to check for the required tokens in the cookie
    async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('sb_auth');
        if (!cookie) {
            return false;
        }

        // loadFromCookie applies the cookie data before checking the user is authenticated
        this.client.auth.getUser(cookie?.value || '');
        return this.client.auth.getUser || false
    }

    // getUser is similar to isAuthenticated, the only difference is the returned data type
    async getUser(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('sb_auth');
        if (!cookie) {
            return false;
        }

        this.client.auth.getUser(cookie?.value || '');
        return this.client.auth.getUser || false;
    }
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;