"use client";

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import Message from './Message';

type Props = {}

const Body = (props: Props) => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/conversations`;
  const { conversationID } = useParams();
  const [prompts, setPrompts] = useState([]);
  const [responses, setResponses] = useState([]);
  const [messages, setMessages] = useState([]);

  const fetchConversation = async () => {
    console.log(conversationID);
    const response = await fetch(`${apiURL}/${conversationID}`);
    const data = await response.json();
    console.log(data);
    console.log(data.prompts);
    console.log(data.responses);
  
    setPrompts(data.prompts);
    setResponses(data.responses);
  
    let tempMessages: any = [];
    for (let i = 0; i < data.prompts.length; i++) {
      tempMessages = tempMessages.concat(data.prompts[i]);
      tempMessages = tempMessages.concat(data.responses[i]);
    }
    setMessages(tempMessages);
    console.log(tempMessages);
  }

  useEffect(() => {
    fetchConversation();
  }, []);

  return (
    <div className='flex-1 w-full flex overflow-y-scroll flex-col gap-2 p-3 no-scrollbar'>
      {messages.map((message, index) => {
        return (
          <Message key={index} isPrompt={index % 2 === 0} message={message} />
        )
      })}
    </div>
  )
}

export default Body