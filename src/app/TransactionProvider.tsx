'use client';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";

type TransactionProviderProps = {
    children: React.ReactNode
}
export default function TransactionProvider({ children }: TransactionProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
}