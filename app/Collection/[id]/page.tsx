import { CollectionProps, collectionItem } from '@/components/CollectionCards'
import Image from 'next/image'
import CollectionCards from "./collections";

const Collection = ({ params }: { params: { id: string } }) => {

  return (
    <div className="container mx-auto">
      <div className='h-56'>
        <Image src={collectionItem.logo} alt=''></Image>
      </div>
      <CollectionCards />
    </div>
  )
}

export default Collection