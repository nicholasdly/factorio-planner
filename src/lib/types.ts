import { Item } from "./data/items";

export type NonEmptyArray<T> = [T, ...T[]];

export type Manufacturer =
  | Item.BurnerMiningDrill
  | Item.ElectricMiningDrill
  | Item.OffshorePump
  | Item.Pumpjack
  | Item.StoneFurnace
  | Item.SteelFurnace
  | Item.ElectricFurnace
  | Item.AssemblingMachine1
  | Item.AssemblingMachine2
  | Item.AssemblingMachine3
  | Item.OilRefinery
  | Item.ChemicalPlant
  | Item.Centrifuge
  | Item.RocketSilo;

export type Recipe = {
  products: NonEmptyArray<{ item: Item; count: number }>;
  duration: number;
  ingredients: NonEmptyArray<{ item: Item; count: number }>;
  manufacturers: NonEmptyArray<Manufacturer>;
};
