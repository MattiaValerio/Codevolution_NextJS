import LoginCard from "@/components/login-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className=" flex h-full items-center justify-center">

      <LoginCard />
    </main>
  );
}
