
import { cn } from "@/lib/utils";
import Link from "next/link";


export const AddNewNFTButton = (props: {className?: string, id: string}) => {
  return ( 
    <Link href={`NFT/Create/${props.id}`}>
        <div className={cn("w-[15.18125rem] h-[18.75rem] relative", props.className)}>
        <div
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#A6AEB7',
                color: '#fff',
                fontSize: '40px',
                lineHeight: '56px',
                textAlign: 'center',
            }}
            >
            {'+'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 400, color: '#A6AEB7' }}>Commit new NFT </div>
        </div>
    </Link>
    
  );
};
