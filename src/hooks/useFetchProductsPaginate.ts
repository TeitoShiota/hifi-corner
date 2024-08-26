import useSWR from 'swr'
import fetcherREST from '@/utils/fetcherREST'

import { ProductsList } from '@/types/product';

interface ProductsPaginate {
    products: ProductsList;
    pageIndex: number;
    pageSize: number;
    totalProducts: number;
    totalPages: number;
}

export function useFetchProductsPaginate( page?: number ): {
    data: ProductsPaginate;
    isLoading: boolean;
    isError: any;
    } {
        const { data, error, isLoading } = useSWR( `/api/products?pageIndex=${page}`, fetcherREST,{
            fallbackData: {
                products: [] as ProductsList
            }
    });

    return {
        data: data,
        isLoading: isLoading,
        isError: error,
    }
}