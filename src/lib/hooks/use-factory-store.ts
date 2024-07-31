import { create } from "zustand";
import { Item } from "../data/items";
import { Factory } from "lucide-react";
import { getRecipe, Recipe } from "../data/recipes";
import { getManufacturer } from "../data/manufacturers";

export type Production = {
  goal?: { item: Item; count: number };
  recipe?: Recipe;
  machine?: { item: Item; count: number };
  byproducts?: { item: Item; count: number }[];
  ingredients?: { item: Item; count: number }[];
};

export type Factory = {
  productions: Production[];
};

type FactoryState = {
  factories: Factory[];
};

type FactoryActions = {
  createFactory: () => number;
  deleteFactory: (index: number) => void;
  getFactory: (factoryIndex: number) => Factory;
  createProduction: (factoryIndex: number) => number;
  deleteProduction: (factoryIndex: number, productionIndex: number) => void;
  getProduction: (factoryIndex: number, productionIndex: number) => Production;
  setProductionGoalItem: (
    factoryIndex: number,
    productionIndex: number,
    item: Item,
  ) => void;
  setProductionGoalCount: (
    factoryIndex: number,
    productionIndex: number,
    count: number,
  ) => void;
  setProductionMachine: (
    factoryIndex: number,
    productionIndex: number,
    item: Item,
  ) => void;
};

type FactoryStore = FactoryState & FactoryActions;

function log(state: FactoryStore, message?: string) {
  if (process.env.NODE_ENV === "production") return;
  console.log(message, state.factories);
}

function computeMachineQuantity(
  count: number,
  duration: number,
  speed: number,
) {
  const quantity = count * (duration / speed);
  return Math.round(quantity * 10) / 10;
}

export const useFactoryStore = create<FactoryStore>((set, get) => ({
  factories: [{ productions: [{}] }],
  createFactory: () => {
    set((state) => ({ factories: [...state.factories, { productions: [] }] }));
    return get().factories.length - 1;
  },
  deleteFactory: (index) =>
    set((state) => ({ factories: state.factories.splice(index, 1) })),
  getFactory: (factoryIndex) => get().factories[factoryIndex],
  createProduction: (factoryIndex) => {
    set((state) => {
      const factory = state.factories[factoryIndex];

      factory.productions.push({});

      log(state, state.createProduction.name);
      return { factories: state.factories };
    });

    return get().factories[factoryIndex].productions.length - 1;
  },
  deleteProduction: (factoryIndex, productionIndex) =>
    set((state) => {
      const factory = state.factories[factoryIndex];

      factory.productions.splice(productionIndex, 1);

      log(state, state.deleteProduction.name);
      return { factories: state.factories };
    }),
  getProduction: (factoryIndex, productionIndex) =>
    get().factories[factoryIndex].productions[productionIndex],
  setProductionGoalItem: (factoryIndex, productionIndex, item) =>
    set((state) => {
      const production =
        state.factories[factoryIndex].productions[productionIndex];

      if (production.goal) {
        production.goal.item = item;
      } else {
        production.goal = { item, count: 1 };
      }

      production.recipe = getRecipe(item);
      production.machine = undefined;
      production.byproducts = production.recipe.products.filter(
        (x) => x.item != item,
      );
      production.ingredients = production.recipe.ingredients;

      log(state, state.setProductionGoalItem.name);
      return { factories: state.factories };
    }),
  setProductionGoalCount: (factoryIndex, productionIndex, count) =>
    set((state) => {
      const production =
        state.factories[factoryIndex].productions[productionIndex];

      if (!production.goal) {
        throw new Error(
          "Unable to set the goal count for an undefined production!",
        );
      }

      production.goal.count = count;

      if (production.machine && production.recipe) {
        const manufacturer = getManufacturer(production.machine.item);
        const count = computeMachineQuantity(
          production.goal.count,
          production.recipe.duration,
          manufacturer.speed,
        );

        production.machine = { item: production.machine.item, count };
      }

      log(state, state.setProductionGoalCount.name);
      return { factories: state.factories };
    }),
  setProductionMachine: (factoryIndex, productionIndex, item) =>
    set((state) => {
      const production =
        state.factories[factoryIndex].productions[productionIndex];

      if (!production.goal || !production.recipe) {
        throw new Error("Unable to set a machine for an undefined production!");
      }

      const manufacturer = getManufacturer(item);
      const count = computeMachineQuantity(
        production.goal.count,
        production.recipe.duration,
        manufacturer.speed,
      );

      production.machine = { item, count };

      log(state, state.setProductionMachine.name);
      return { factories: state.factories };
    }),
}));
