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
      nome: z.string().min(1, {
            message: "Inserire un nome.",
      }),
      cognome: z.string().min(1, {
            message: "Inserire un cognome.",
      }),
      username: z.string().min(2, {
            message: "Scegli il tuo username.",
      }),
      password1: z.string().min(6, {
            message: "Inserire la password.",
      }),
      password2: z.string().min(6, {
            message: "Inserire la password.",
      }),
      indirizzo: z.string().min(2, {
            message: "Inserire un indirizzo.",
      }),
      CAP: z.string().min(5, {
            message: "Inserire un CAP.",
      }),
      Citta: z.string().min(2, {
            message: "Inserire una citta.",
      }),
      provincia: z.string().min(2, {
            message: "Inserire una provincia [VE, UD, RO...].",
      }),



})

export default function RegisterCard() {

      // 1. Define your form.
      const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                  nome: "",
                  cognome: "",
                  username: "",
                  password1: "",
                  password2: "",
                  indirizzo: "",
                  CAP: "",
                  provincia: "",
                  Citta: ""
            }
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
            <Card className="flex flex-col items-center justify-center mx-3 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                  <CardHeader className="flex items-center">
                        <CardTitle >REGISTER</CardTitle>
                  </CardHeader>
                  <CardContent className="w-10/12 sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                    <FormField
                                          control={form.control}
                                          name="nome"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>Nome:</FormLabel>
                                                      <FormControl >
                                                            <Input id="name" {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="cognome"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>Cognome:</FormLabel>
                                                      <FormControl>
                                                            <Input id="surname" {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="username"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>Username:</FormLabel>
                                                      <FormControl>
                                                            <Input id="username" {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />

                                    <div className=" flex justify-between">
                                          <FormField
                                                control={form.control}
                                                name="password1"
                                                render={({ field }) => (
                                                      <FormItem >
                                                            <FormLabel>Password:</FormLabel>
                                                            <FormControl>
                                                                  <Input id="psw1" type="password" {...field} />
                                                            </FormControl>
                                                      </FormItem>

                                                )}
                                          /><FormField
                                                control={form.control}
                                                name="password2"
                                                render={({ field }) => (
                                                      <FormItem >
                                                            <FormLabel>Password:</FormLabel>
                                                            <FormControl>
                                                                  <Input id="psw2" type="password" {...field} />
                                                            </FormControl>
                                                      </FormItem>

                                                )}
                                          />
                                    </div>

                                    <FormField
                                          control={form.control}
                                          name="indirizzo"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>Indirizzo:</FormLabel>
                                                      <FormControl>
                                                            <Input id="address" {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />

                                    <FormField
                                          control={form.control}
                                          name="CAP"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>CAP:</FormLabel>
                                                      <FormControl>
                                                            <Input id="CAP"{...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="Citta"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>Città:</FormLabel>
                                                      <FormControl>
                                                            <Input id="city" {...field} />
                                                      </FormControl>
                                                </FormItem>

                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="provincia"
                                          render={({ field }) => (
                                                <FormItem >
                                                      <FormLabel>provincia:</FormLabel>
                                                      <FormControl>
                                                            <Input id="provicnia" {...field} />
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