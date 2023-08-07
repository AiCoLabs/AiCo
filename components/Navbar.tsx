"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import { BsFillPersonLinesFill } from "react-icons/bs";

const navs = [
  {
    link: "/AIWork",
    label: "AIWork",
  },
  {
    link: "/Collection/Create",
    label: "Create",
  },
  {
    link: "/About",
    label: "About",
  },
  {
    link: "/Roadmap",
    label: "Roadmap",
  },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto h-20 flex justify-between items-center text-white">
      <Link href="/">
        <div className="gap-2 flex items-center ">
          <Image
            className="rounded-full"
            src="/logo.png"
            width={30}
            height={30}
            alt="logo"
          />
          <h3 className="text-2xl font-mono">AiCoo</h3>
        </div>
      </Link>
      <div className="w-[420px] py-2 flex justify-between text-xl">
        {navs.map((nav) => (
          <Link key={nav.link} href={nav.link}>
            {nav.label}
          </Link>
        ))}
      </div>
      <div>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const connected = mounted && account && chain;
            return (
              <div
                {...(!mounted && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
                className="text-bold"
              >
                {(() => {
                  if (!connected) {
                    return (
                      <Button
                        onClick={openConnectModal}
                        className="bg-blue-500"
                        variant={"ghost"}
                      >
                        Connect Web3
                      </Button>
                    );
                  }
                  if (chain.unsupported) {
                    return (
                      <Button onClick={openChainModal}>Wrong network</Button>
                    );
                  }
                  return (
                    <div className="flex gap-3 text-white items-center">
                      <Button
                        onClick={openAccountModal}
                        className="bg-white text-black"
                        variant={"ghost"}
                      >
                        {account.displayName}
                      </Button>
                      <Link href={"/User"}>
                        <BsFillPersonLinesFill className="text-3xl cursor-pointer" />
                      </Link>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </nav>
  );
};
export default Navbar;