import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CollectionProps } from './CollectionCards'

const UserAvatar = (props: { data: CollectionProps, className?: string }) => {
    const { data, className = 'w-10 h-10' } = props
    return (
        <div className='flex gap-2 items-center'>
            <Avatar className={className}>
                <AvatarImage src={data.logo as string} />
                <AvatarFallback>Avtar</AvatarFallback>
            </Avatar>
            <div>@0x3d45</div>
        </div>
    )
}

export default UserAvatar