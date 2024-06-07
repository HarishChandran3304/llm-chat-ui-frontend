"use client";

import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import TaskList from '@/components/shared/task-list/TaskList'
import React from 'react'
import AddTaskDialog from './_components/AddTaskDialog'
import { useState, useEffect } from 'react'
import Task from './_components/Task'

type Props = {}

const Tasks = (props: Props) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setTasks(data.tasks)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <TaskList title="Tasks" action={<AddTaskDialog />}>
        {
          // Display the tasks here
          tasks.map((task: string, index: number) => {
            return <Task key={index} text={task} idx={index} />
          })
        }
      </TaskList>
      <ConversationFallback />
    </>
  )
}

export default Tasks