import { Card } from '@/components/ui/card'
import React from 'react'

type Props = {
  id: string
}

const Header = ({ id: id }: Props) => {
  return (
    <Card className='w-full h-20 flex rounded-lg items-center p2 justify-between'>
      <div className="flex items-center gap-2 p-5">
        <h2 className="font-semibold text-xl">
          Conversation {id}
        </h2>
      </div>
    </Card>
  )
}

export default Header