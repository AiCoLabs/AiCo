import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CollectionProps } from './CollectionCards'
import { NewCollectionCreateds } from "@/lib/type"

const UserAvatar = (props: { data?: CollectionProps, created?: NewCollectionCreateds, className?: string }) => {
    const { data, created, className = 'w-10 h-10' } = props
    let logo 
    if (data){
        logo = data.logo
    }else{
        logo = created?.detailJson.image
    }
    return (
        <div className='flex gap-2 items-center'>
            <Avatar className={className}>
                <AvatarImage src={logo as string} />
                <AvatarFallback>Avtar</AvatarFallback>
            </Avatar>
            <div>created?.collectionOwner</div>
        </div>
    )
}

export default UserAvatar