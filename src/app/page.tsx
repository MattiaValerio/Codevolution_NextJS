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
      <main className="border flex flex-col gap-5 h-full items-center justify-center">
        <DisplayUsersCards props={users}></DisplayUsersCards>
      </main>
    </>
  );
}
