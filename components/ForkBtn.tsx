import Image from "next/image"
import opensealogo from "/public/logo.svg"
import { CollectionProps } from "./CollectionCards"
import Link from "next/link"

const ForkButton = (props: { data: CollectionProps }) => {
    const { data } = props
    return (
        <Link href={"/"}>
            <div className='w-16 flex justify-center items-center gap-1 bg-[#3B29AE] rounded-sm'>
                <Image alt='fork' src={opensealogo} width={16} height={16} />
                <div>Buy</div>
            </div>
        </Link>
    )
}

export default ForkButton