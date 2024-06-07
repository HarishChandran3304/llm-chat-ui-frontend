"use client";

import TaskList from '@/components/shared/task-list/TaskList'
import React, { useState, useEffect } from 'react'
import ConversationItem from './_components/ConversationItem';

type Props = React.PropsWithChildren<{}>

const ConversationsLayout = ({ children }: Props) => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/conversations`
  const [conversations, setConversations] = useState([])

  const fetchConversations = async () => {
    try {
      const response = await fetch(apiURL)
      const data = await response.json()
      setConversations(data.conversations)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchConversations()
  }, [])

  return (
    <>
      <TaskList title='Conversations'>
        {
          Object.keys(conversations).map((conversationId: string) => {
            return <ConversationItem id={conversationId} />
          })
        }
      </TaskList>
      {children}
    </>
  )
}

export default ConversationsLayout