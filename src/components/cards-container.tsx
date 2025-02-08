"use client";

import { CardWrapper } from "@/components/card-wrapper";
import { useMetrics } from "@/features/metrics-get-api";
import { DollarSign, Music, Radio, Star } from "lucide-react";


export const CardContainers = () => {
  const { data  } = useMetrics();

    if(!data) return

  const { totalstream, totalStreams, revenue, topArtist } = data!;
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 mb-5">
    <CardWrapper
    icon={DollarSign}
    mainNumber={`$${revenue.toLocaleString()}`}
    text="Total Revenue"
    message="Revenue generated from streams in the last 30 days."
  />
  <CardWrapper
    icon={Music}
    mainNumber={totalStreams.toLocaleString()}
    text="Total Streams"
    message="The total number of streams across all users."
  />
  <CardWrapper
    icon={Radio}
    mainNumber={totalstream.toLocaleString()}
    text="Active Streams"
    message="Streams generated by active users in the last 30 days."
  />
  <CardWrapper
    icon={Star}
    mainNumber={topArtist}
    text="Top Artist"
    message="This artist had the most streams in the past 30 days."
  />
    </div>
  );
};
