import { Card } from '@/components/ui/card'
import React from 'react'

type Props = React.PropsWithChildren<{
    title: string
    action?: React.ReactNode
}>

const TaskList = ({ children, title, action: Action }: Props) => {
  return <Card className='h-full w-full lg:flex-none lg:w-80 p-5'>
    <div className='mb-4 h-1/10 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold tracking-tight'>
            {title}
        </h1>
          {Action ? Action : null}
    </div>
    <div className='w-full h-full flex flex-col items-center justify-start gap-4'>
        {children}
    </div>
  </Card>
}

export default TaskList