import Image from "next/image"
import Logo from "/public/logo.svg"
import { CollectionProps } from "./CollectionCards"
import Link from "next/link"

const ForkButton = (props: { data: CollectionProps }) => {
    const { data } = props
    return (
        <Link href={"/NFT/Fork/"}>
            <div className='w-16 flex justify-center items-center gap-1 bg-indigo-800 rounded-sm'>
                <Image alt='fork' src={Logo} width={16} height={16} />
                <div>Fork</div>
            </div>
        </Link>
    )
}

export default ForkButton