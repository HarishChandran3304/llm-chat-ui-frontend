"use client";

import ConversationContainer from '@/components/shared/conversation/ConversationContainer'
import React, { useState, useEffect } from 'react'
import Header from './_components/Header';
import Body from './_components/Body';
import ChatInput from './_components/ChatInput';

type Props = {
  params: {
    conversationID: string
  }
}

const ConversationPage = ({ params: { conversationID } }: Props) => {
  const apiurl = `${process.env.NEXT_PUBLIC_API_URL}/conversations`

  const [conversation, setConversation] = useState([]);

  const fetchConversation = async () => {
    try {
      const response = await fetch(`${apiurl}/${conversationID}`);
      const data = await response.json();
      setConversation(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchConversation();
  }, []);

  return (
    <ConversationContainer>
      <Header id={conversationID}/>
      <Body />
      <ChatInput />
    </ConversationContainer>
  )
}

export default ConversationPage