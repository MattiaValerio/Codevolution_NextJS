"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
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
import Link from "next/link";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


const formSchema = z.object({
      username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
      }),
      password: z.string().min(6, {
            message: "Password must be at least 6 characters.",
      }),
})

export default function LoginCard() {

      // 1. Define your form.
      const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                  username: "",
                  password: ""
            },
      })

      const router = useRouter()
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
            // Do something with the form values.
            // ✅ This will be type-safe and validated.
            console.log(values)
            router.push("/")

      }

      return (<>
            <Card className="flex flex-col items-center justify-center mx-5 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                  <CardHeader className="flex items-center">
                        <CardTitle >LOGIN</CardTitle>
                        <CardDescription>Inserisci le tue credenziali</CardDescription>
                  </CardHeader>
                  <CardContent className="w-8/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-8/12">
                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                    <FormField
                                          control={form.control}
                                          name="username"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>Username:</FormLabel>
                                                      <FormControl >
                                                            <Input {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="password"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>Password:</FormLabel>
                                                      <FormControl>
                                                            <Input id="password" type="password" {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />

                                    <Button className="flex justify-center items-center mt-4" type="submit">
                                          <p>Login</p>
                                    </Button>


                              </form>
                        </Form>
                  </CardContent>
                  <CardFooter>
                        <p>{new Date().getFullYear()} © Mattia Valerio</p>
                  </CardFooter>
            </Card>
      </>);
}