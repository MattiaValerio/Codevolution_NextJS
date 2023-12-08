"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export async function addUserAction(e: FormData) {
      const dati = e.get("dati")?.toString()

      const x = JSON.parse(dati!)

      console.log(x)

      await prisma.users.create({
            data: x
      })
}

export async function AddTodo(e: FormData) {
      const dati = e.get("dati")?.toString()
      const x = JSON.parse(dati!)

      console.log(x)

      await prisma.todos.create({ data: x })
}

export async function GetTodos() {
      const todos = await prisma.todos.findMany()

      return todos;
}

