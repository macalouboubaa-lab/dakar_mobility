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

      // Commentaire : on ne bloque plus l’accès direct après inscription.
      // Si la session n’est pas immédiatement disponible après signUp, on tente une connexion instantanée.
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
      <div className="w-full max-w-md bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h1 className="text-2xl font-bold text-green-400 mb-6">Créer un compte</h1>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Nom complet"
          className="w-full bg-gray-800 rounded-xl p-3 text-white mb-3"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-800 rounded-xl p-3 text-white mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Téléphone"
          className="w-full bg-gray-800 rounded-xl p-3 text-white mb-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full bg-gray-800 rounded-xl p-3 text-white mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex gap-2 mb-4">
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
          className="mt-4 w-full rounded-xl bg-green-500 px-3 py-3 font-semibold text-black disabled:opacity-50"
        >
          {loading ? "Création du compte..." : "Créer mon compte"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Déjà un compte ? <a href="/auth/login" className="text-green-400">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
