"use client";

import { DataTable } from "@/app/(table)/data-table";
import { columns } from "./columns";
import { useFactoryStore } from "@/lib/hooks/use-factory-store";
import { Button } from "@/components/shadcn/button";

export default function TestPage() {
  const { factories, createProduction } = useFactoryStore();

  return (
    <div className="container mx-auto space-y-3 py-10">
      <DataTable
        key={factories[0].productions.length}
        columns={columns}
        data={factories[0].productions}
      />
      <div>
        <Button onClick={() => createProduction(0)}>Add new production</Button>
      </div>
    </div>
  );
}
