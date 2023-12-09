"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { PrismaClient } from "@prisma/client"
import { AddTodo, GetTodos } from "@/ServerActions/userServerActions"
import { NextPageContext } from "next"

const formSchema = z.object({
      titolo: z.string(),
})




export default function TodosPage() {


      const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                  titolo: "",
            },
      })

      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
            var dati = JSON.stringify(values)
            const formData = new FormData();
            formData.append("dati", dati)
            AddTodo(formData)
      }


      return (
            <>

                  <div className="flex flex-col gap-10 h-full items-center justify-center">
                        <h1 className="text-4xl mt-5">TODOS</h1>
                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-5/12 h-[95%]">
                                    <FormField
                                          control={form.control}
                                          name="titolo"
                                          render={({ field }) => (
                                                <FormItem className="">
                                                      <FormControl className="h-14">
                                                            <Input className="text-center text-xl "  {...field} />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />
                                    <div className=" flex justify-center">
                                          <Button type="submit" className="text-xl py-6 px-8">AGGIUNGI</Button>
                                    </div>

                                    {/* <ul className="flex flex-col items-center gap-2 text-lg">
                                          {todos?.map((todo) => {
                                                return (
                                                      <li>{todo.titolo}</li>
                                                )
                                          })}
                                    </ul> */}
                              </form>
                        </Form>
                  </div>
            </>
      )
}
