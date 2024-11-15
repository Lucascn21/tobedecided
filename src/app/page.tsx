"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import UsersThing from "./components/UsersThing";

const Home: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.dir("onError");
        if (query?.meta?.errorMessage) {
          console.error(query.meta.errorMessage);
        }
        console.error(error);
      },
      onSettled: (data, error) => {
        console.dir("onSettled");
        if (error) {
          console.dir(data);
          console.error(error);
        }
      },
      onSuccess(data) {
        console.dir("onSuccess");
        console.log(data);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <UsersThing />
    </QueryClientProvider>
  );
};

export default Home;
