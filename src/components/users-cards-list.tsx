"use client";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { DeleteUser, Updateuser } from "@/lib/Actions";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { set } from "react-hook-form";

export default function DisplayUsersCards({ props }: { props: User[] }) {
  let newNome: string;
  let newCognome: string;
  let newUserName: string;
  let newIndirizzo: string;

  return (
    <div className="flex w-full gap-4 flex-wrap items-center justify-center">
      {props.map((user) => {
        let [open, setOpen] = useState(false);
        useEffect(() => {
          if (open == true) {
            setOpen(false);
          }
        }, [setOpen]);
        return (
          <Dialog key={user.id} open={open} onOpenChange={setOpen}>
            <AlertDialog>
              <Card className="flex flex-col w-8/12 sm:w-5/12  sm:max-h-3/6 md:w-3/12 md:max-h-3/6 xl:w-2/12 ">
                <CardHeader>
                  <CardTitle className="text-center">
                    {user.nome} {user.cognome}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div>
                    <p>
                      {user.nome} {user.cognome}
                    </p>
                  </div>
                  <div>
                    <p>{user.citta},</p>
                    <p>
                      {user.provincia}, {user.cap}
                    </p>
                    <p>{user.indirizzo}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between h-1/4">
                  {/* DIALOG TRIGGER PER IL POP UP EDIT USER */}
                  <DialogTrigger asChild>
                    <Button variant="outline">Modifica</Button>
                  </DialogTrigger>
                  {/* ALERT DIALOG TRIGGER PER IL POP UP DELETE USER */}
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Elimina</Button>
                  </AlertDialogTrigger>
                </CardFooter>
              </Card>
              {/* ALER DIALOG CONTENT PER POP UP DELETE USER */}
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    STAI ELIMINANDO {user.nome.toUpperCase()}{" "}
                    {user.cognome.toUpperCase()}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Ciò che stai per fare eliminerà definitivamente tutti i dati
                    dal nostro Database, in maniera irreversibile.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-900 text-white"
                    onClick={async () => {
                      console.log("ELIMINA");
                      await DeleteUser(user.id);
                    }}
                  >
                    Continua
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {/* DIALOG CONTENT PER POP UP EDIT USER */}
            <DialogContent className="p-10 ">
              <DialogHeader>
                <DialogTitle>Modifica Profilo</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome:
                  </Label>
                  <Input
                    id="name"
                    defaultValue={user.nome.toString()}
                    onChange={(e) => {
                      newNome = e.target.value;
                    }}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Cognome:
                  </Label>
                  <Input
                    id="surname"
                    defaultValue={user.cognome.toString()}
                    onChange={(e) => {
                      newCognome = e.target.value;
                    }}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username:
                  </Label>
                  <Input
                    id="username"
                    defaultValue={user.username.toString()}
                    onChange={(e) => {
                      newUserName = e.target.value;
                    }}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Indirizzo:
                  </Label>
                  <Input
                    id="address"
                    defaultValue={user.indirizzo.toString()}
                    onChange={(e) => {
                      newIndirizzo = e.target.value;
                    }}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={async () => {
                    await Updateuser(
                      user.id,
                      newNome,
                      newCognome,
                      newUserName,
                      newIndirizzo
                    );
                    setOpen(false);
                  }}
                >
                  Salva
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
