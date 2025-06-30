import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link
      href={"/cart"}
      className="hidden lg:flex items-center gap-2.5 justify-end group"
    >
      <span className="relative">
        <ShoppingBag className="text-tech_white lg:text-tech_orange w-5 h-6 lg:w-6 lg:h-6 group-hover:text-tech_orange lg:group-hover:text-tech_white hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-tech_orange text-tech_white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
      </span>
      <div className="flex flex-col">
        <h4 className="text-base font-bold text-tech_white">TV Deal</h4>
        <p className="text-xs whitespace-nowrap">Special Deals</p>
      </div>
    </Link>
  );
};

export default CartIcon;
