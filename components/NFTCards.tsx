import { cn, sanitizeDStorageUrl } from "@/lib/utils";

interface CardProps {
  src: string;
  children?: React.ReactNode;
  className?: string;
}

// Generate by stable_diffusion
export const NFTCard = (props: CardProps) => {
  const { src } = props;
  return (
    <div
      className={cn("w-[15.18125rem] h-[18.75rem] relative", props.className)}
    >
      <img src={sanitizeDStorageUrl(src)} alt="card" />
      {props.children}
    </div>
  );
};
