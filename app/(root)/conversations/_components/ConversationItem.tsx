import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

type Props = {
    id: string
}

const ConversationItem = ({ id: id}: Props) => {
  return (
    <Link href={`/conversations/${id}`} className='w-full'>
        <Card className="p-2 h-20 flex flex-row items-center gap-4 truncate">
            <div className="flex flex-row items-center gap-4 truncate">
                <h4 className='text-l'>Conversation {id}</h4>
            </div>
        </Card>
    </Link>
  )
}

export default ConversationItem