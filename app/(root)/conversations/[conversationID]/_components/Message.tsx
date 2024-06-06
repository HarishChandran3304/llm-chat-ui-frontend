import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { BotMessageSquare, User } from 'lucide-react'
import React from 'react'

type Props = {
    isPrompt: boolean,
    message: string
}

const Message = ({ isPrompt, message }: Props) => {
  return <div className={cn("flex items-end", {"justify-end": isPrompt})}>
    <div className={cn("flex flex-col w-full mx-2", {"order-1 items-end": isPrompt, "order-2 items-start": !isPrompt})}>
        <div className={cn("px-4 py-2 rounded-lg max-w-[70%]", {"bg-primary text-primary-foreground": isPrompt, "bg-secondary text-secondary-foreground": !isPrompt})}>
            {message}
        </div>
    </div>
    <Avatar className={cn("w-8 h-8", {"order-2": isPrompt, "order-1": !isPrompt})}>
        {isPrompt ? <User /> :<BotMessageSquare />}
    </Avatar>
  </div>
}

export default Message