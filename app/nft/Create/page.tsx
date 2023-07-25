import NftBaseForm from "../components/nft-baseform";

export default function CreatNFT() {
  return (
    <div className="flex-1 text-white text-2xl bg-indigo-500 p-3 rounded-2xl">
      <NftBaseForm type="TextToImage" />
    </div>
  );
}