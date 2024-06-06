import { Card } from '@/components/ui/card'
import React from 'react'

type Props = {
    idx: number
    text: string
}

const Task = ({ idx, text }: Props) => {
  return <Card className='w-full h-20 p-2 flex flex-row items-center justify-between gap-2'>
    <div className="flex flex-col truncate gap-2">
        <p className='text-l'>Task-{idx+1}:</p>
        <p className='text-m truncate'>{text}</p>
    </div>
  </Card>
}

export default Task