import { Metadata } from "next";
import { GetUsers } from "@/lib/Actions";
import DisplayUsersCards from "@/components/users-cards-list";

export const metadata: Metadata = {
  title: "Home Page",
  icons:
    "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/256/T-Rex-Flat-icon.png",
};

export default async function Home() {
  var users = await GetUsers();

  return (
    <>
      <main className=" flex flex-col gap-8 h-full items-center justify-center mt-5">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl">UTENTI</h1>
          <p className="text-gray-500">
            Vai alla sezione Register per creare un nuovo utente
          </p>
        </div>
        <DisplayUsersCards props={users}></DisplayUsersCards>
      </main>
    </>
  );
}
