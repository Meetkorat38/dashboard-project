import { RevenueDistribution } from "@/components/revenue-distribution";
import { TopSongsChart } from "@/components/top-streams-chart";
import { ActiveUserGrowthChart } from "@/components/user-growth-chart";

const AnalyticsPage = () => {
  return (
    <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-28 w-full mb-4">
                <TopSongsChart/>
                <RevenueDistribution/>
        </div>
        <ActiveUserGrowthChart/>
    </div>
  )
};

export default AnalyticsPage;
