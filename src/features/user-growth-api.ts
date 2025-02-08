import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUserGrowth = () => {
    const query = useQuery({
        queryKey : ["user"],
        queryFn : async () => {
            const response = axios.get("/api/chartData")
      
            const data = (await response).data
      
            return data
          }
    })

    return query
}