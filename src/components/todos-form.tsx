"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddTodo, GetTodos } from "@/lib/Actions";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  titolo: z.string(),
});

export default function TodosForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titolo: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      var dati = JSON.stringify(values);
      const formData = new FormData();
      formData.append("dati", dati);
      form.reset();
      AddTodo(formData);
    } catch {
      console.log("errore");
    }
  }

  return (
    <>
      <div className=" w-full flex flex-col items-center gap-5 ">
        <h1 className="text-4xl mt-5">TODOS</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] h-[95%] "
          >
            <FormField
              control={form.control}
              name="titolo"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl className="h-14 ">
                    <Input
                      className="text-center text-xl focus:outline-none focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex justify-center">
              <Button type="submit" className="text-xl py-6 px-8">
                AGGIUNGI
              </Button>
            </div>
          </form>
          <ul></ul>
        </Form>
      </div>
    </>
  );
}
