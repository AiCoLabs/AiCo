"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className={cn("flex lg:flex-col", className)} {...props}>
      <Tabs
        className="flex gap-4"
        value={pathname}
        onValueChange={(href) => router.push(href)}
      >
        <TabsList className="flex-col justify-start bg-transparent text-xl text-white">
          {items.map((item) => (
            <TabsTrigger key={item.href} value={item.href}>{item.title}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-background hover:bg-background hover:text-white"
              : "hover:bg-background hover:text-white",
            "text-white",
            "text-xl",
            "text-center",
            "h-[44px]",
            "leading-[44px]"
          )}
        >
          {item.title}
        </Link>
      ))} */}
    </nav>
  );
}
