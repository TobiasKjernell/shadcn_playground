'use client'
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <Calendar1Icon />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        className="rounded-lg"
                    />
                </PopoverContent>
            </Popover>

            <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
                <div className="flex flex-col gap-4">
                    {Array.from({ length: 10 }).map((_, index) => <Card key={index} className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id={`${index}`} />
                            <label htmlFor={`${index}`} className="text-sm text-muted-foreground">Current label text</label>
                        </div>
                    </Card>)}
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList;            