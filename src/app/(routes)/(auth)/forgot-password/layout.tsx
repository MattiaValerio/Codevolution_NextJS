import { Metadata } from "next";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1 className="flex items-center justify-center">LAYOUT 4GOT PSW</h1>
    </>
  );
}
