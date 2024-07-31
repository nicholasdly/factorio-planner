/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/shadcn/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Input } from "@/components/shadcn/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Item } from "@/lib/data/items";
import { Production, useFactoryStore } from "@/lib/hooks/use-factory-store";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Check, ChevronsUpDown, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import ItemButton from "./item-button";
import Image from "next/image";
import { assets } from "@/lib/data/assets";

export const columns: ColumnDef<Production>[] = [
  {
    accessorKey: "item",
    header: "Product",
    cell: ({ row }) => {
      const [open, setOpen] = useState(false);
      const { getProduction, setProductionGoalItem, setProductionGoalCount } =
        useFactoryStore();
      const { goal } = getProduction(0, row.index);

      return (
        <div className="flex items-center gap-3 text-nowrap">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-72 justify-between"
              >
                {goal?.item ?? "Select an item..."}
                <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0">
              <Command>
                <CommandInput placeholder="Search items..." />
                <CommandEmpty>No item found.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    {Object.values(Item).map((item) => (
                      <CommandItem
                        key={item}
                        value={item}
                        onSelect={(value) => {
                          setProductionGoalItem(0, row.index, value as Item);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 size-4",
                            item === goal?.item ? "opacity-100" : "opacity-0",
                          )}
                        />
                        {item}
                        <div className="relative ml-1 size-4 overflow-hidden">
                          <Image
                            className="object-cover"
                            src={assets[item]}
                            alt={item}
                            width={16}
                            height={16}
                            quality={25}
                          />
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <span>@</span>
          <Input
            type="number"
            className="w-24"
            min={1}
            placeholder="?"
            disabled={!goal?.item}
            defaultValue={goal?.count}
            onChange={(event) => {
              setProductionGoalCount(0, row.index, +event.target.value);
            }}
          />
          <span>per minute</span>
        </div>
      );
    },
  },
  {
    accessorKey: "machine",
    header: "Machine",
    cell: ({ row }) => {
      const { getProduction, setProductionMachine } = useFactoryStore();
      const { recipe, machine } = getProduction(0, row.index);

      return (
        <div className="flex items-center gap-3 text-nowrap">
          <Select
            key={machine?.item}
            disabled={!recipe}
            onValueChange={(value) =>
              setProductionMachine(0, row.index, value as Item)
            }
            value={machine?.item}
          >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a machine" />
            </SelectTrigger>
            <SelectContent>
              {recipe?.manufacturers.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>x</span>
          <span>{machine?.count.toLocaleString() ?? "?"}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "byproducts",
    header: "Byproducts per minute",
    cell: ({ row }) => {
      const { getProduction } = useFactoryStore();
      const { byproducts, goal } = getProduction(0, row.index);

      return (
        <div className="flex flex-col text-nowrap">
          {byproducts?.map(({ item, count }, index) => (
            <div key={index}>
              {item} x {(count * goal!.count).toLocaleString()}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "ingredients",
    header: "Ingredients per minute",
    cell: ({ row }) => {
      const {
        getProduction,
        createProduction,
        setProductionGoalItem,
        setProductionGoalCount,
      } = useFactoryStore();
      const { ingredients, goal } = getProduction(0, row.index);

      return (
        <div className="flex gap-1 text-nowrap">
          {ingredients?.map(({ item, count }, index) => (
            <div key={index}>
              <ItemButton
                item={item}
                count={count * goal!.count}
                onClick={() => {
                  const productionIndex = createProduction(0);
                  setProductionGoalItem(0, productionIndex, item);
                  setProductionGoalCount(
                    0,
                    productionIndex,
                    count * goal!.count,
                  );
                }}
              />
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const { getFactory, deleteProduction } = useFactoryStore();
      const factory = getFactory(0);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-red-500 hover:!text-red-500 dark:hover:!text-red-500"
              disabled={factory.productions.length <= 1}
              onClick={() => deleteProduction(0, row.index)}
            >
              Delete production
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
