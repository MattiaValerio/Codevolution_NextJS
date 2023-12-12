"use server";
import { Asul } from "next/font/google";
import prisma from "../../db/db";
import { revalidatePath } from "next/cache";

export async function addUserAction(e: FormData) {
  const dati = e.get("dati")?.toString();

  const x = JSON.parse(dati!);

  console.log(x);

  await prisma.users.create({
    data: x,
  });
}

export async function GetUsers() {
  const users = await prisma.users.findMany();

  return users;
}

// export default async function DeleteUser(UserId: number){
//   await prisma.users.delete()
// }

export async function AddTodo(e: FormData) {
  //const prisma = new PrismaClient();
  const dati = e.get("dati")?.toString();
  const x = JSON.parse(dati!);
  await prisma.todos.create({ data: x });
  revalidatePath("/todos");
}

export async function GetTodos() {
  //const prisma = new PrismaClient();
  const todos = await prisma.todos.findMany();

  return todos;
}
