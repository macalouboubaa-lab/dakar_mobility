# Agent: KAGEBOT
# AGENTS.md - Instructions pour les agents IA

Ce fichier contient les instructions essentielles pour les agents IA qui travaillent sur le projet **NIU DEIM**.

## 📋 Vue d'ensemble du projet

**NIU DEIM** est une application de mobilité urbaine pour Dakar et ses régions.
- **Framework** : Next.js 16.2.4 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Authentification** : Supabase Auth
- **Base de données** : Supabase PostgreSQL
- **Cartographie** : Mapbox GL
- **Déploiement** : Vercel

## 🔑 Principales conventions

- Code frontend uniquement : pas de backend Node API dans ce dépôt.
- `app/` contient les pages et routes App Router.
- `components/` contient des composants UI réutilisables.
- `lib/` contient la logique partagée, surtout `lib/supabaseClient.ts`.
- Utiliser `export default function` et `PascalCase` pour les composants.
- Éviter `any`; préférer des types explicites.
- Utiliser `use client` uniquement pour les composants interactifs.
- Préférer Tailwind pour le style; respecter le design system vert (`green-600`, `green-700`).

## 🗂️ Fichiers et routes clés

- `app/layout.tsx` : layout racine et navbar globale.
- `app/page.tsx` : page d’accueil.
- `app/auth/login/page.tsx` et `app/auth/register/page.tsx` : flux d’authentification.
- `app/client/home/page.tsx` : espace client.
- `app/driver/home/page.tsx` : espace chauffeur.
- `app/admin/home/page.tsx` : espace admin.
- `app/components/AuthGate.tsx` : gestion de session et redirections.
- `lib/supabaseClient.ts` : client Supabase singleton et helpers.
- `migrations/ensure_supabase_schema.sql` / `supabase/schema.sql` : schéma de base.

## 🌐 Environnement et configuration

- Ne jamais commiter `.env.local`.
- Variables attendues :
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_MAPBOX_TOKEN`
  - Optionnel : `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_APP_SLOGAN`
- Le projet utilise Supabase côté client via `lib/supabaseClient.ts`.
- Pour la configuration Supabase, consultez `docs/SUPABASE_SETUP.md`.

## ✅ Bonnes pratiques pour les agents

- Lisez d’abord `README.md` et `docs/SUPABASE_SETUP.md` avant de modifier la configuration.
- Modifiez la logique Supabase principalement dans `lib/supabaseClient.ts`.
- Pour les composants visuels, utilisez `app/components/` et `components/` selon l’usage.
- Respectez les routes : `/client/*`, `/driver/*`, `/admin/*`, `/auth/*`, `/booking/[id]`.
- Ne pas ajouter de backend API route ; ce dépôt est orienté frontend + Supabase.

## 🚨 Règles importantes

### ❌ À NE PAS FAIRE
1. Ne pas commiter de secrets ou de clés API.
2. Ne pas modifier directement `main` sans PR.
3. Ne pas utiliser `any` quand un type précis est possible.
4. Ne pas ignorer les erreurs de linting ou les warnings Next.js.

### ✅ À FAIRE
1. Tester localement : `npm run dev`, `npm run build`, `npm run lint`.
2. Documenter les changements importants.
3. Centraliser l’accès Supabase via `lib/supabaseClient.ts`.
4. Respecter la structure de routes existante.

## 🔧 Commandes utiles

```bash
npm install
npm run dev
npm run build
npm run lint
npm run start
npm run verify:supabase
```

## 📚 Documentation liée

- `README.md` pour l’installation et le déploiement.
- `docs/SUPABASE_SETUP.md` pour la configuration Supabase.
- `migrations/ensure_supabase_schema.sql` et `supabase/schema.sql` pour le schéma de base.
