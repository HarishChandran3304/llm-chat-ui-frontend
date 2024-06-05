import TaskList from '@/components/shared/task-list/TaskList'
import React from 'react'

type Props = React.PropsWithChildren<{}>

const ConversationsLayout = ({ children }: Props) => {
  return (
    <>
      <TaskList title='Conversations'>
        Conversations Page
      </TaskList>
      {children}
    </>
  )
}

export default ConversationsLayout