import Image from "next/image"
import Logo from "/public/logo.svg"
import { CollectionProps } from "./CollectionCards"
import Link from "next/link"
import { NFTProps } from "./NFTCards"

const ForkButton = (props: { data: NFTProps }) => {
    const { data } = props
    return (
        <Link href={`/NFT/Fork/${data.collectionId}/${data.id}/${data.name}`}>
            <div className='w-16 flex justify-center items-center gap-1 bg-indigo-800 rounded-sm'>
                <Image alt='fork' src={Logo} width={16} height={16} />
                <div>Fork</div>
            </div>
        </Link>
    )
}

export default ForkButton