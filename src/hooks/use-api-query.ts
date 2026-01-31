"use client"

import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

type QueryFnType<T> = () => Promise<T>

export function useAPIQuery<T>(
    queryKey: unknown[],
    queryFn: QueryFnType<T>,
    options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
    return useQuery({
        queryKey,
        queryFn,
        staleTime: 1000 * 60 * 5,
        ...options,
    })
}