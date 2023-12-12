import RegisterCard from "@/components/register-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};


export default async function Register() {
  return (
    <main className="flex flex-col p-3 items-center justify-center">
      <RegisterCard />

    </main>
  );
}
