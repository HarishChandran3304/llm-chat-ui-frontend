import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import TaskList from '@/components/shared/task-list/TaskList'
import React from 'react'

type Props = {}

const Tasks = (props: Props) => {
  return (
    <>
      <TaskList title="Tasks">
        Tasks Page
      </TaskList>
      <ConversationFallback />
    </>
  )
}

export default Tasks