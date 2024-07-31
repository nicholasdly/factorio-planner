"use client";

import { columns } from "../components/columns";
import { useFactoryStore } from "@/lib/hooks/use-factory-store";
import { Button } from "@/components/shadcn/button";
import { DataTable } from "@/components/shadcn/data-table";

export default function TestPage() {
  const { factories, createProduction } = useFactoryStore();

  return (
    <main className="container mx-auto space-y-3 py-10">
      <h1>
        <span className="text-xl font-bold">Factorio Planner</span>
      </h1>
      <DataTable
        key={factories[0].productions.length}
        columns={columns}
        data={factories[0].productions}
      />
      <div>
        <Button onClick={() => createProduction(0)}>Add new production</Button>
      </div>
    </main>
  );
}
