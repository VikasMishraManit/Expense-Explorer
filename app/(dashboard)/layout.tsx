import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode; // Define children prop as ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex h-screen w-full flex-col">
         <Navbar />
      <div className="w-full">
        {children} 
      </div>
    </div>
  );
}

export default Layout;
