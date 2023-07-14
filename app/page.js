//app/page.tsx
"use client";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const submit = async () => {
    const res = await fetch("/api/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (res.ok) {
      const doc = await res.json();
      console.log(doc);
    }
  };
  return (
    <div>
      <button onClick={submit}>Create Document</button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
