"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient, getSupabaseConfigIssue } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "driver" | "admin">("client");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister() {
    setLoading(true);
    setError("");

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPhone = phone.trim();

    if (!trimmedFullName || !trimmedEmail || !trimmedPhone || !password) {
      setError("Veuillez remplir tous les champs avant de créer votre compte.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      setLoading(false);
      return;
    }

    try {
      const configIssue = getSupabaseConfigIssue();
      if (configIssue) {
        setError(`Configuration Supabase manquante : ${configIssue}`);
        setLoading(false);
        return;
      }

      const supabase = getSupabaseClient();

      const { data, error: authError } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
        options: {
          data: {
            role,
            full_name: trimmedFullName,
          },
        },
      });

      if (authError) {
        setError(`Inscription impossible : ${authError.message}`);
        setLoading(false);
        return;
      }

      if (data.user) {
        const { error: profileError } = await supabase.from("users").insert({
          id: data.user.id,
          email: trimmedEmail,
          phone: trimmedPhone,
          full_name: trimmedFullName,
          role,
        });

        if (profileError) {
          const hint = profileError.message.includes("relation") && profileError.message.includes("does not exist")
            ? "Le schéma Supabase n’est pas encore appliqué. Exécutez SUPABASE_SCHEMA.sql dans l’éditeur SQL de Supabase."
            : "Vérifiez les politiques RLS sur public.users.";

          setError(`Compte créé, mais le profil n’a pas pu être enregistré : ${profileError.message}. ${hint}`);
          setLoading(false);
          return;
        }
      }

      if (!data.session) {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password,
        });

        if (loginError) {
          setError(`Compte créé, mais la connexion automatique a échoué : ${loginError.message}`);
          setLoading(false);
          return;
        }
      }

      const destination = role === "driver" ? "/driver/home" : role === "admin" ? "/admin/home" : "/client/home";
      router.replace(destination);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setError(`Erreur d’inscription : ${message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <h1 className="mb-2 text-2xl font-bold text-green-400">🚌 NIU DEIM</h1>
        <p className="mb-6 text-sm text-gray-400">Créer un compte pour réserver vos trajets et gérer vos transports.</p>
        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

        <input
          type="text"
          placeholder="Nom complet"
          className="mb-3 w-full rounded-xl border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-green-500"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full rounded-xl border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Téléphone"
          className="mb-3 w-full rounded-xl border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-green-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="mb-3 w-full rounded-xl border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mb-4 flex gap-2">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`flex-1 rounded-xl px-3 py-2 ${role === "client" ? "bg-green-500 text-black" : "bg-gray-800 text-white"}`}
          >
            Client
          </button>
          <button
            type="button"
            onClick={() => setRole("driver")}
            className={`flex-1 rounded-xl px-3 py-2 ${role === "driver" ? "bg-green-500 text-black" : "bg-gray-800 text-white"}`}
          >
            Chauffeur
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 rounded-xl px-3 py-2 ${role === "admin" ? "bg-green-500 text-black" : "bg-gray-800 text-white"}`}
          >
            Admin
          </button>
        </div>

        <button
          type="button"
          onClick={handleRegister}
          disabled={loading}
          className="w-full rounded-xl bg-green-500 px-3 py-3 font-semibold text-black transition hover:bg-green-400 disabled:opacity-50"
        >
          {loading ? "Création du compte..." : "Créer mon compte"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Déjà un compte ?{" "}
          <a href="/auth/login" className="text-green-400">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
