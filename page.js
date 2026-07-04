"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error) setError(error.message);
    else setDone(true);
  }

  if (done) {
    return (
      <main className="max-w-sm mx-auto px-6 py-20 text-center">
        <h1 className="font-display text-2xl mb-3">Check your email</h1>
        <p className="text-ink/60">We sent a confirmation link to {email}.</p>
      </main>
    );
  }

  return (
    <main className="max-w-sm mx-auto px-6 py-20">
      <h1 className="font-display text-2xl mb-6">Create an account</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text" placeholder="Full name" value={fullName} required
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-line rounded-card px-4 py-2.5"
        />
        <input
          type="email" placeholder="Email" value={email} required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-line rounded-card px-4 py-2.5"
        />
        <input
          type="password" placeholder="Password (min 6 characters)" value={password} required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-line rounded-card px-4 py-2.5"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="btn-primary w-full">Sign up</button>
      </form>
      <p className="text-sm text-ink/60 mt-4">
        Already have an account? <a href="/login" className="underline">Log in</a>
      </p>
    </main>
  );
}
