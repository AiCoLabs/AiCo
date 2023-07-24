import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav";

export const metadata: Metadata = {
  title: "mint nft",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Text2Image",
    href: "/nft/Create",
  },
  {
    title: "Image2Image",
    href: "/nft/Create/imagetoimage",
  },
  {
    title: "Use Own Image",
    href: "/nft/Create/useownimage",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="container mx-auto">
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        
        <div className="flex-1 text-white text-2xl bg-indigo-500 p-3 rounded-2xl lg:max-w-2xl" style={{ "--foreground": "#fff", "--background": "transparent" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
