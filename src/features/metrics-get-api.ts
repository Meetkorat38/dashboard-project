import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type ResponseType = {totalstream:number , activestream:number , totalStreams:number , revenue:number , topArtist:string}

export const useMetrics = () => {
    const query = useQuery<ResponseType , Error>({
        queryKey : ["metrics"],
        queryFn : async () => {
            const response = await axios.get("/api/metrics")
            console.log('API response:', response.data);
            return response.data;
          }
    })

    return query
}