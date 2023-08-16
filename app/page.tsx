"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import Image from "next/image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import FeaturesCards from "@/components/FeaturesCards";
import { CollectionIng, CollectionRandom } from "@/components/CollectionCards";
import img4 from "@/public/card.png";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { NFTInfoProps, NewCollectionCreateds } from "@/lib/type";
import { getAllNFTCreateds } from "@/api/mongodbApi";

import { shuffleArray } from "@/lib/utils";
import { TESTNET_OPENSEA } from "@/lib/constants";
import {
  getAllNewNFTCreateds,
  getUnMintExpiredCollection,
} from "@/api/thegraphApi";

const Home = () => {
  const [nfts, setNFTs] = useState<NFTInfoProps[]>([]);
  useEffect(() => {
    getAllNFTCreateds<NFTInfoProps[]>().then((res) => {
      console.log("res", res);
      setNFTs(res);
    });
  }, []);
  const [collections, setCollections] = useState<
    NewCollectionCreateds[] | undefined
  >([]);

  useEffect(() => {
    //  mintExpired unit is second
    const todaySecondStr = `${Math.floor(Date.now() / 1000)}`;
    getUnMintExpiredCollection(todaySecondStr).then((res) => {
      setCollections(res as NewCollectionCreateds[]);
    });
  }, []);

  const [nft1, nft2, nft3] = shuffleArray<NFTInfoProps>(nfts);
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex text-white py-40 relative">
          <div className="w-9/12">
            <h1 className="text-4xl uppercase font-500 tracking-wider">
              Unlock the power of creators through{" "}
              <span className="text-[#A318D3]">AI Coo</span>perate
            </h1>
            <h1 className="text-2xl mt-[68px]">
              Co-create in one collection by AIGC, <br />
              Show your creativity & Share Royalty of collection
            </h1>
            <div className="flex gap-8 mt-24">
              <a
                href={`${TESTNET_OPENSEA}/assets/base-goerli/0x6e1842df1740fbea35845581a163e0a742f6ad40`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-rgba text-black">
                  View on OpenSea
                </Button>
              </a>
              <Link href={"/Collection/Create"}>
                <Button>Create Collection</Button>
              </Link>
            </div>
          </div>
          {nft1 && (
            <div className="absolute top-8 end-32 w-52 h-72 rotate-[35deg]">
              <CollectionRandom sampleData={nft1} />
            </div>
          )}
          {nft2 && (
            <div className="absolute top-80 end-0 w-48 h-64">
              <CollectionRandom sampleData={nft2} />
            </div>
          )}
          {nft3 && (
            <div className="absolute top-96 end-72 w-48 h-64 rotate-[17.5deg]">
              <CollectionRandom sampleData={nft3} />
            </div>
          )}
        </div>
        <div className="mt-32">
          <Title>Live Co-Create</Title>
          <div
            className="flex justify-between py-8 px-10  mt-16 rounded-2xl"
            style={{
              background:
                "linear-gradient(241deg, #031322 0%, rgba(151, 147, 198, 0.24) 71.35%)",
            }}
          >
            {collections?.slice(0, 3).map((card) => (
              <CollectionIng key={card.id} sampleData={card} />
            ))}
          </div>
        </div>
        {/* <div className='mt-40'>
          <Title>Featured nfts</Title>
          <div className='grid grid-cols-4 gap-4 py-8 justify-items-center mt-16 rounded-2xl bg-indigo-500'>
            {nfts.map(card => <Link key={card.id} href={`/Collection/${card.id}`}><CollectionDone data={card} /></Link>)}
          </div>
        </div> */}
        <div className="mt-40" id="About">
          <Title>How to works</Title>
          <div className="mt-16 rounded-2xl bg-indigo-500">
            <ReactPlayer url="https://youtu.be/nCZ6GDQ_BJU" width={"100%"} height={"640px"} controls/>
          </div>
        </div>
        <div className="mt-40">
          <Title>Features</Title>
          <FeaturesCards />
        </div>
        <div className="py-10 mt-32 rounded-2xl bg-indigo-500 text-white">
          <Title>What’s AiCoo?</Title>
          <div className="flex justify-between">
            <div className="pl-24 mt-9">
              <div className="max-w-lg">
                <div className="text-xl">
                  AiCoo is a decentralized co-create platfrom through AI. Anyone
                  can initial a new collection and set conditions for who can
                  paticipate. All participants co-created used AI
                  tool(Chatgpt/Stable Diffusion), And all contributors of
                  collection share the royalty of the collection. Claim the
                  royalty fee from the NFT contracts.
                </div>
                <Link href={"/Collection/Create"}>
                  <Button className="bg-yellow-rgba text-black mt-16">
                    Show your creativity
                  </Button>
                </Link>
              </div>
            </div>
            <Image src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="pt-10 pb-40 mt-32 text-white index_bg">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="mt-56">
              <div className="font-normal text-5xl">Ready to get started?</div>
              <Button className="bg-white text-black mt-10 rounded-full w-72 uppercase tracking-wide">
                Get Started
              </Button>
            </div>
            <Image src={img4} alt="" />
          </div>
          <div className="flex gap-4 items-center">
            <Image src={logo} alt="" width={100} height={100} />
            <div className="text-4xl">AiCoo</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
