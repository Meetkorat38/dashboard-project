import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useStreamData = () => {
    const query = useQuery({
        queryKey : ["stream"],
        queryFn : async () => {
            const response = axios.get("/api/streams")
      
            const data = (await response).data
      
            return data
          }
    })

    return query
}