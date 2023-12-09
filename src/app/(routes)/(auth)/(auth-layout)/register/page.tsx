import RegisterCard from "@/components/register-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};


export default async function Register() {
  return (
    <main className="flex h-full items-center justify-center">
      <RegisterCard />

    </main>
  );
}
