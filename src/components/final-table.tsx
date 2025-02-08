"use client";

import { useStreamData } from "@/features/stream-data-api";
import { columnsStreams } from "./columns";
import { DataTable } from "./data-table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const UserTable = () => {
  const { data } = useStreamData();

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
