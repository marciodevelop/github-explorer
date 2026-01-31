"use client";

import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProviderProps = { children: ReactNode };

export function Providers(props: ProviderProps) {
    const { children } = props;
    const [queryClient] = useState(() => new QueryClient({ 
        defaultOptions: {
            queries: {
                staleTime: 1000 * 1,
                refetchOnWindowFocus: false,
            },
        },
     }))

     return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
     )
}