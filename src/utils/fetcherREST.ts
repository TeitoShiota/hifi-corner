import { AxiosResponse } from 'axios';
import { Fetcher } from 'swr';

import axios from 'axios'

/**
 * 
 * @param url 
 * @returns Promise<AxiosResponse> | Error
 * 
 */
export default function fetcherREST<Fetcher>(url: string) {
    if (!url) return new Error('No URL provided')

    return axios.get(url).then(res => res.data)
}