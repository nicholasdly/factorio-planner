// Sourced from the Official Factorio Wiki: https://wiki.factorio.com/Materials_and_recipes

import { Recipe } from "../types";
import { Item } from "./items";

export const recipes: Readonly<Recipe[]> = [
  {
    products: [{ item: Item.WoodenChest, count: 1 }],
    duration: 0.5,
    ingredients: [{ item: Item.Wood, count: 2 }],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.IronChest, count: 1 }],
    duration: 0.5,
    ingredients: [{ item: Item.IronPlate, count: 8 }],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.SteelChest, count: 1 }],
    duration: 0.5,
    ingredients: [{ item: Item.SteelPlate, count: 8 }],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.StorageTank, count: 1 }],
    duration: 3,
    ingredients: [
      { item: Item.IronPlate, count: 20 },
      { item: Item.SteelPlate, count: 5 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.TransportBelt, count: 2 }],
    duration: 0.5,
    ingredients: [
      { item: Item.IronGearWheel, count: 1 },
      { item: Item.IronPlate, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.FastTransportBelt, count: 1 }],
    duration: 0.5,
    ingredients: [
      { item: Item.IronGearWheel, count: 5 },
      { item: Item.TransportBelt, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.ExpressTransportBelt, count: 1 }],
    duration: 0.5,
    ingredients: [
      { item: Item.FastTransportBelt, count: 1 },
      { item: Item.IronGearWheel, count: 10 },
      { item: Item.Lubricant, count: 20 },
    ],
    manufacturers: [Item.AssemblingMachine2, Item.AssemblingMachine3],
  },
  {
    products: [{ item: Item.UndergroundBelt, count: 2 }],
    duration: 1,
    ingredients: [
      { item: Item.IronPlate, count: 10 },
      { item: Item.TransportBelt, count: 5 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.FastUndergroundBelt, count: 2 }],
    duration: 2,
    ingredients: [
      { item: Item.IronGearWheel, count: 40 },
      { item: Item.UndergroundBelt, count: 2 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.ExpressUndergroundBelt, count: 2 }],
    duration: 2,
    ingredients: [
      { item: Item.FastUndergroundBelt, count: 2 },
      { item: Item.IronGearWheel, count: 80 },
      { item: Item.Lubricant, count: 40 },
    ],
    manufacturers: [Item.AssemblingMachine2, Item.AssemblingMachine3],
  },
  {
    products: [{ item: Item.Splitter, count: 1 }],
    duration: 1,
    ingredients: [
      { item: Item.ElectronicCircuit, count: 5 },
      { item: Item.IronPlate, count: 5 },
      { item: Item.TransportBelt, count: 4 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.FastSplitter, count: 1 }],
    duration: 2,
    ingredients: [
      { item: Item.ElectronicCircuit, count: 10 },
      { item: Item.IronGearWheel, count: 10 },
      { item: Item.Splitter, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.ExpressSplitter, count: 1 }],
    duration: 2,
    ingredients: [
      { item: Item.AdvancedCircuit, count: 10 },
      { item: Item.FastSplitter, count: 1 },
      { item: Item.IronGearWheel, count: 10 },
      { item: Item.Lubricant, count: 80 },
    ],
    manufacturers: [Item.AssemblingMachine2, Item.AssemblingMachine3],
  },
  {
    products: [{ item: Item.BurnerInserter, count: 1 }],
    duration: 0.5,
    ingredients: [
      { item: Item.IronGearWheel, count: 1 },
      { item: Item.IronPlate, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.Inserter, count: 1 }],
    duration: 0.5,
    ingredients: [
      { item: Item.ElectronicCircuit, count: 1 },
      { item: Item.IronGearWheel, count: 1 },
      { item: Item.IronPlate, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.CopperCable, count: 2 }],
    duration: 0.5,
    ingredients: [{ item: Item.CopperPlate, count: 1 }],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.IronGearWheel, count: 1 }],
    duration: 0.5,
    ingredients: [{ item: Item.IronPlate, count: 2 }],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.ElectronicCircuit, count: 1 }],
    duration: 0.5,
    ingredients: [
      { item: Item.CopperCable, count: 3 },
      { item: Item.IronPlate, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.AutomationSciencePack, count: 1 }],
    duration: 5,
    ingredients: [
      { item: Item.CopperPlate, count: 1 },
      { item: Item.IronGearWheel, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  {
    products: [{ item: Item.LogisticSciencePack, count: 1 }],
    duration: 6,
    ingredients: [
      { item: Item.Inserter, count: 1 },
      { item: Item.TransportBelt, count: 1 },
    ],
    manufacturers: [
      Item.AssemblingMachine1,
      Item.AssemblingMachine2,
      Item.AssemblingMachine3,
    ],
  },
  // TODO: Add more recipes!
];
