import PocketBase from "pocketbase";

export const pb = new PocketBase('http://pckbase-01.homelab.teito.dk:28090');

export async function userAuthenticate(username: string, password: string) {
    try {
        const authData = await pb.collection('SP_HiFi_Corner').authWithPassword(username, password);
        
        if (!authData.token) {
            throw new Error('No token in auth data');
        }

        return authData;
    } catch (error) {
        throw new Error('Invalid username or password');
    }
    const authData = await pb.collection('SP_HiFi_Corner').authWithPassword(username, password);
    return authData;
}