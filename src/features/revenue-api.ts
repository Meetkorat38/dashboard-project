import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useRevenueDistrbiution = () => {
    const query = useQuery({
        queryKey : ["revenue"],
        queryFn : async () => {
            const response = axios.get("/api/revenue")
      
            const data = (await response).data
      
            return data
          }
    })

    return query
}