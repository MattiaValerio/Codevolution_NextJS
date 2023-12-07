"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export default async function addUserAction(e: FormData) {
      const dati = e.get("dati")?.toString()

      const x = JSON.parse(dati!)

      console.log(x)

      await prisma.users.create({
            data: x
      })




}

