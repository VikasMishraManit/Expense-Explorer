import Logo from "@/components/Logo";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="mt-16"> 
        <Logo />
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default Layout;
