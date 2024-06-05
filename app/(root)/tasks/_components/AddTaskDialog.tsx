"use client";

import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';



type Props = {}

const AddTaskSchema = z.object({
    text: z
    .string().min(1, {message: "Task must be at least 1 character long"})
    .max(255, {message: "Task must be at most 255 characters long"})
})

const AddTaskDialog = (props: Props) => {

    const form = useForm<z.infer<typeof AddTaskSchema>>({
        resolver: zodResolver(AddTaskSchema),
        defaultValues: {
            text: ""
        }
    })

    const handleSubmit = () => {};

  return (
    <Dialog>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button size="icon" variant="outline" asChild>
                        <DialogTrigger>
                            <Plus />
                        </DialogTrigger>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add Task</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Add Task
                </DialogTitle>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                    <FormField control={form.control} name="text" render={({field}) => 
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Enter task...' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>} 
                    />
                    <DialogFooter>
                        <Button disabled={false} type='submit'>Add</Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
  )
}

export default AddTaskDialog