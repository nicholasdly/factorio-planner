// Sourced from the Official Factorio Wiki: https://wiki.factorio.com/Crafting#Automated_crafting

import { Item } from "./items";

type Manufacturer =
  | {
      item: Item;
      energy: "none";
      speed: number;
    }
  | {
      item: Item;
      energy: "burner";
      consumption: number;
      speed: number;
    }
  | {
      item: Item;
      energy: "electric";
      consumption: number;
      drain: number;
      speed: number;
      slots: number;
    };

export const manufacturers: Manufacturer[] = [
  {
    item: Item.BurnerMiningDrill,
    energy: "burner",
    consumption: 150,
    speed: 0.25,
  },
  {
    item: Item.ElectricMiningDrill,
    energy: "electric",
    consumption: 90,
    drain: 0,
    speed: 0.5,
    slots: 3,
  },
  {
    item: Item.OffshorePump,
    energy: "none",
    speed: 1200,
  },
  {
    item: Item.Pumpjack,
    energy: "electric",
    consumption: 90,
    drain: 0,
    speed: 1,
    slots: 2,
  },
  {
    item: Item.StoneFurnace,
    energy: "burner",
    consumption: 90,
    speed: 1,
  },
  {
    item: Item.SteelFurnace,
    energy: "burner",
    consumption: 90,
    speed: 2,
  },
  {
    item: Item.ElectricFurnace,
    energy: "electric",
    consumption: 180,
    drain: 6,
    speed: 2,
    slots: 2,
  },
  {
    item: Item.AssemblingMachine1,
    energy: "electric",
    consumption: 75,
    drain: 2.5,
    speed: 0.5,
    slots: 0,
  },
  {
    item: Item.AssemblingMachine2,
    energy: "electric",
    consumption: 150,
    drain: 5,
    speed: 0.75,
    slots: 2,
  },
  {
    item: Item.AssemblingMachine3,
    energy: "electric",
    consumption: 375,
    drain: 12.5,
    speed: 1.25,
    slots: 4,
  },
  {
    item: Item.OilRefinery,
    energy: "electric",
    consumption: 420,
    drain: 14,
    speed: 1,
    slots: 3,
  },
  {
    item: Item.ChemicalPlant,
    energy: "electric",
    consumption: 210,
    drain: 7,
    speed: 1,
    slots: 3,
  },
  {
    item: Item.Centrifuge,
    energy: "electric",
    consumption: 350,
    drain: 11.6,
    speed: 1,
    slots: 2,
  },
  {
    item: Item.RocketSilo,
    energy: "electric",
    consumption: 4000,
    drain: 0,
    speed: 1,
    slots: 4,
  },
];

export function getManufacturer(item: Item): Manufacturer {
  const manufacturer = manufacturers.find((x) => x.item === item);

  if (!manufacturer) {
    throw new Error(`The item "${item}" is not an item manufacturer!`);
  }

  return manufacturer;
}
