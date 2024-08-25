import useSWR from 'swr'

import fetcherREST from '@/utils/fetcherREST'

import { ProductsList, Product } from '@/types/product';


export function useFetchProducts(): {
    data: { products: ProductsList } ;
    isLoading: boolean;
    isError: any;
    } {
        const { data, error, isLoading } = useSWR( `/api/products`, fetcherREST,{
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