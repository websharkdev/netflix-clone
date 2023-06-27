import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useBillboard;
