"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import {  House, ShoppingCart, StickyNote } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="Home" icon={<House />}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">AI Co-pilot</HoveredLink>
          
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products" icon={<ShoppingCart />}>
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">ChatGPT All in One Guide</HoveredLink>
            <HoveredLink href="/">Social Media in Bundle</HoveredLink>

          
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blogs" icon={<StickyNote />}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Technology</HoveredLink>
            
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
