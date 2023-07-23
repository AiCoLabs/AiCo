import { CollectionProps, collectionItem } from '@/components/CollectionCards'
import Image from 'next/image'
import { Twitter } from 'lucide-react';
import UserAvatar from '@/components/UserAvatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CollectionCards from "./collections";

const Collection = ({ params }: { params: { id: string } }) => {

  return (
    <div className="container mx-auto">
      <Image src={collectionItem.logo} alt='' className='w-full h-56 -mb-32'></Image>
      <div className='px-10 '>
        <Image src={collectionItem.logo} alt='' className='w-40 h-40'></Image>
        <div className='grid grid-cols-3 gap-14 text-lg text-white'>
          <div className='col-span-2'>
            <div className='flex justify-between items-center mt-4'>
              <div className='text-2xl font-medium'>Collection Name</div>
              <div className='flex justify-between gap-2'>
                <Twitter />
                <Twitter />
                <Twitter />
                <Twitter />
              </div>
            </div>
            <div className='flex gap-2 items-center mt-4'>
              <div>By</div>
              <UserAvatar data={collectionItem} />
            </div>
            <div className='flex gap-6 mt-4'>
              <div className='flex gap-2 items-center'>
                <div className='text-white-rgba'>Creators</div>
                <div>851</div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='text-white-rgba'>Items  </div>
                <div>5.3K</div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='text-white-rgba'>Community earnings</div>
                <div>4%</div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='text-white-rgba'>Category  </div>
                <div>MEME</div>
              </div>
            </div>
            <div className='mt-4'>Collection description</div>
            <div className='mt-4'>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-white-rgba'>See more</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className='bg-indigo-500 py-4 px-2'>
              <div className='flex gap-6'>
                <div className='flex gap-2 items-center'>
                  <div className='text-white-rgba'>Total Royalty:   </div>
                  <div>9.5 ETH</div>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='text-white-rgba'>Royalty Balance:    </div>
                  <div> 5.5 ETH</div>
                </div>
              </div>
              <div className='flex gap-6 mt-4'>
                <div className='flex gap-2 items-center'>
                  <div className='text-white-rgba'> Your Share:   </div>
                  <div>0.1 ETH</div>
                </div>
                <div className='bg-indigo-800 p-1 rounded-sm'>
                  Chain
                </div>
              </div>

            </div>
          </div>
          <div className='col-span-1'>
            <div className='text-2xl font-medium text-white-rgba'>Rule</div>
            <div className='flex gap-4 mt-4'>
              <div className='text-white-rgba'>Mint Limit: </div>
              <div>10K</div>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='text-white-rgba'>End Time:  </div>
              <div>Jul/20th/2023  18:00:00</div>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='text-white-rgba'>Mint Price:    </div>
              <div>0.05 ETH </div>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='text-white-rgba'>Permission:   </div>
              <div>Need Whitelist/Public</div>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='text-white-rgba'>Rights:  </div>
              <div>  To protect the quality of collection,Collection owner have rights to refund(gas not include) and delete any item within 7 days after minted.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#D9D9D9] mt-7"></div>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="Search by name" className='bg-white-rgba text-white' />
        <Button type="submit" className='bg-indigo-800'>Search</Button>
      </div>
      <CollectionCards />
    </div>
  )
}

export default Collection