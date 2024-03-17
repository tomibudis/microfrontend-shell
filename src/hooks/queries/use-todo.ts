import axios from "~utils/axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface ResponseTodo {
  id: string;
  title: string;
  completed: boolean;
}

const useQueryTodo = (): UseQueryResult<ResponseTodo[], Error> => {
  const endpoint = "/todos";
  const baseURL = "https://jsonplaceholder.typicode.com";
  return useQuery({
    queryKey: ["todos"],
    /**
     * Retrieves data from the specified endpoint using an HTTP GET request.
     *
     * @return {Promise<ResponseTodo[]>} The response data from the endpoint.
     */
    queryFn: async () => {
      const { data } = await axios.get<ResponseTodo[]>(endpoint, { baseURL });
      return data;
    },
  });
};

export { useQueryTodo };
export default useQueryTodo;
export type { ResponseTodo };
