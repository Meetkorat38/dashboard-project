"use client";

import { useStreamData } from "@/features/stream-data-api";
import { columnsStreams } from "./columns";
import { DataTable } from "./data-table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Loader } from "lucide-react";

export const UserTable = () => {
  const { data , isPending } = useStreamData();

  if(isPending) {
    return(
      <div className="flex items-center justify-center">
        <Loader className="animate-spin size-3"/>
      </div>
    )
  }

  if(!data) return

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User Table</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columnsStreams} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};
