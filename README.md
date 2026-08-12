# NIU DEIM

NIU DEIM est une application moderne de mobilité urbaine pour Dakar et ses régions, intégrant recherche d'itinéraires, comparaison de transports, réservation et suivi de trajets.

## Fonctionnalités clés

- Recherche d’itinéraires multi-modaux
- Comparaison entre BRT, cars, taxis collectifs, TER et VTC
- Interface dédiée passager et conducteur
- Intégration Supabase pour l’authentification et la persistance des données

## Prérequis

- Node.js 20+
- npm
- un projet Supabase

## Installation

```bash
npm install
cp .env.example .env.local
```

Renseigner les variables suivantes dans [.env.local](.env.local) :

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token
NEXT_PUBLIC_APP_NAME=NIU DEIM
NEXT_PUBLIC_APP_SLOGAN=Tous les transports de Dakar, dans une seule app
```

## Développement

```bash
npm run dev
```

## Vérification

```bash
npm run build
npm run lint
```

## Déploiement

1. Connecter le dépôt GitHub à Vercel.
2. Ajouter les variables d’environnement dans les settings Vercel.
3. Déployer la branche principale.

