import { ActiveUserChart } from "@/components/active-user-chart";
import { CardContainers } from "@/components/cards-container";

export default function Home() {
  return (
      <div className="w-full">
        <CardContainers/>
        <ActiveUserChart />
      </div>
    );
}
