import useSWR from 'swr'

import fetcherREST from '@/utils/fetcherREST'

import { ProductsList, Product } from '@/types/product';


export function useFetchMostPopularProducts(): {
    data: { products: ProductsList } ;
    isLoading: boolean;
    isError: any;
    } {
        const { data, error, isLoading } = useSWR( `/api/products/most-popular`, fetcherREST,{
            fallbackData: {
                products: [] as ProductsList
            }
        }
    );

    return {
        data: data,
        isLoading: isLoading,
        isError: error,
    }
}