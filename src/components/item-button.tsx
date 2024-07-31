import { assets } from "@/lib/data/assets";
import { Item } from "@/lib/data/items";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./shadcn/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";

interface ItemButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: Item;
  count?: number;
}

export default function ItemButton({ item, count, ...props }: ItemButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          size="item"
          variant="outline"
          className="relative overflow-hidden p-1"
          {...props}
        >
          <div className="relative overflow-hidden">
            <Image
              className="object-cover"
              src={assets[item]}
              alt={item}
              width={64}
              height={64}
            />
          </div>
          {!!count && (
            <span className="text-stroke absolute bottom-0.5 right-0.5 text-lg font-bold leading-none text-white">
              {formatNumber(count)}
            </span>
          )}
        </Button>
      </TooltipTrigger>
      {!!count && (
        <TooltipContent>
          <p>
            {count.toLocaleString()} x {item}
          </p>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
