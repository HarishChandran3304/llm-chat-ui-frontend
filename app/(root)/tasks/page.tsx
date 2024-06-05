import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import TaskList from '@/components/shared/task-list/TaskList'
import React from 'react'
import AddTaskDialog from './_components/AddTaskDialog'

type Props = {}

const Tasks = (props: Props) => {
  return (
    <>
      <TaskList title="Tasks" action={<AddTaskDialog />}>
        Tasks Page
      </TaskList>
      <ConversationFallback />
    </>
  )
}

export default Tasks