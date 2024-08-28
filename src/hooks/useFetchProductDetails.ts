import useSWR from 'swr'

import fetcherREST from '@/utils/fetcherREST'

import { Product } from '@/types/product';


export function useFetchProductDetails( productId: string ): {
    data: { product: Product } ;
    isLoading: boolean;
    isError: any;
    } {
        const { data, error, isLoading } = useSWR( `/api/detail?productId=${productId}`, fetcherREST,{
            fallbackData: {
                products: {} as Product
            }
        }
    );

    return {
        data: data,
        isLoading: isLoading,
        isError: error,
    }
}