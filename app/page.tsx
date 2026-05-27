"use client"

import { LoginForm } from "@/components/login-form";
export default function Home() {

  return (
    <main className="justify-center flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-xl">
        <LoginForm />
      </div>
    </main>
  );
}
