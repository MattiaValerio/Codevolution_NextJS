import { Metadata } from "next";
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
} from "@/components/ui/alert-dialog";
import DisplayUsers from "@/components/user-display";
import prisma from "../../db/db";
import { GetUsers } from "@/lib/Actions";

export const metadata: Metadata = {
  title: "Home Page",
  icons:
    "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/256/T-Rex-Flat-icon.png",
};

export default async function Home() {
  var users = await GetUsers();

  console.log(users);

  return (
    <>
      <main className="border flex flex-col gap-5 h-full items-center justify-center">
        <h1 className="text-4xl mb-9">USERS</h1>

        <DisplayUsers props={users}></DisplayUsers>

        {/* <AlertDialog>
          <AlertDialogTrigger className="border bg-black text-white p-2 rounded-md">
            Click-Me
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Titolo alert</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
      </main>
    </>
  );
}
