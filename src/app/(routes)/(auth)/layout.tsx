import RegisterCard from "@/components/register-card";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  icons: "https://cdn-icons-png.flaticon.com/512/1791/1791961.png ",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1 className="flex items-center justify-center">
        
      </h1>
    </>
  );
}
