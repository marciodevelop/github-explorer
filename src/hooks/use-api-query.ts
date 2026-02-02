"use client"

import { type QueryKey, type UseQueryOptions, useQuery } from '@tanstack/react-query'

type QueryFnType<TQueryFnData> = () => Promise<TQueryFnData>

export function useAPIQuery<TQueryFnData, TError = Error, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    queryKey: TQueryKey,
    queryFn: QueryFnType<TQueryFnData>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) {
    return useQuery({
        queryKey,
        queryFn,
        staleTime: 1000 * 60 * 5,
        ...options,
    })
}