import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 쿼리 클라이언트 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패시 재시도 횟수
      staleTime: 60 * 1000, // 60초간 캐시 유지
      gcTime: 1000 * 60 * 5, // 5분 캐시 유지 (v5 기준)
      refetchOnReconnect: true,
      refetchOnWindowFocus: false, // 포커스 시 데이터를 다시 가져오지 않도록, RN에서는 false가 일반적
    },
    mutations: {
      retry: 0,
    },
  },
});

const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
