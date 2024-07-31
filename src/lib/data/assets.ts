import { Item } from "./items";

const baseUrl = "https://wiki.factorio.com/images/";

function getAssets() {
  const assets: Record<string, string> = {};

  Object.values(Item).forEach((item) => {
    const filename = item.split(" ").join("_");
    assets[item] = baseUrl + filename + ".png";
  });

  // The "Rail" item uses the "Straight_rail.png" file.
  assets["Rail"] = baseUrl + "Straight_rail.png";

  return assets as Record<Item, string>;
}

export const assets: Readonly<Record<Item, string>> = getAssets();
