import { HandCoins } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <a href="/" className="flex items-center gap-2">
        <HandCoins className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
        <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        ExpenseExplorer
        </p>
      </a>
    </div>
  );
}
export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
      ExpenseExplorer
      </p>
    </a>
  );
}


export default Logo
