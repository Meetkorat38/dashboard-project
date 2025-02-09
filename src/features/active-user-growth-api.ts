import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useActiveUserGrowth = () => {
    const query = useQuery({
        queryKey : ["active"],
        queryFn : async () => {
            const response = await axios.get("/api/userGrowth")
            const data = await response.data
            return data
          }
    })

    return query
}