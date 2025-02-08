import { Skeleton } from '@/components/ui/skeleton'

const LoadingPageDeafult = () => {
        return(
          <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-14 h-screen ">
            <Skeleton className="h-[250px] w-[550px] rounded-md" />
            <Skeleton className="h-[250px] w-[550px] rounded-md" />
            <Skeleton className="h-[250px] w-[550px] rounded-md" />
            <Skeleton className="h-[250px] w-[550px] rounded-md" />
        </div>
        )
}

export default LoadingPageDeafult