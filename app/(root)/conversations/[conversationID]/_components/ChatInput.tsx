"use client";

import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import React, {useState, useEffect, useRef} from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import TextareaAutosize from 'react-textarea-autosize';
import { Button } from '@/components/ui/button';
import { SendHorizonal } from 'lucide-react';

const chatMessageSchema = z.object({
    id: z.string(),
    prompt: z.string().min(1, {message: "This field can't be empty!"})
})

const ChatInput = () => {
    const { conversationID } = useParams()
    const apiURL = "http://127.0.0.1:8000/conversations"
    const textareaRef = useRef<HTMLTextAreaElement | null> (null)

    const form = useForm<z.infer<typeof chatMessageSchema>>({
        resolver: zodResolver(chatMessageSchema),
        defaultValues: {
            id: "",
            prompt: ""
        }
    })

    const handleSubmit = async (values: z.infer<typeof chatMessageSchema>) => {
        values.id = `${conversationID}`;
        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            form.reset()
            window.location.reload()

        } catch (error) {
            console.error(error)
        }
    }

    const handleInputChange = (e: any) => {
        const {value, selectionStart} = e.target;

        if(selectionStart !== null) {
            form.setValue('prompt', value)
        }
    }

  return (
    <div>
        <Card className='w-full p-2 rounded-lg relative'>
            <div className="flex gap-2 items-end w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2 items-end w-full">
                        <FormField control={form.control} name="prompt" render={({field}) => {
                            return <FormItem className="h-full w-full">
                                <FormControl>
                                    <TextareaAutosize
                                    onKeyDown={async e => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault()
                                            await form.handleSubmit(handleSubmit)()
                                        }
                                    }}
                                    rows={1} maxRows={3}
                                    onChange={handleInputChange} onClick={handleInputChange}
                                    placeholder='Ask me something :)'
                                    className='w-full min-h-full resize-none border-0 outline-0 bg-card text-card-foreground placeholder:text-mute d-foreground p-1.5'/>
                                </FormControl>
                            </FormItem>
                        }} />
                        <Button size="icon" type="submit">
                            <SendHorizonal />
                        </Button>
                    </form>
                </Form>
            </div>
        </Card>
    </div>
  )
}

export default ChatInput