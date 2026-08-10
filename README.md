# 🚌 DAKAR MOBILITY

Plateforme numérique de mobilité urbaine à Dakar (Sénégal).
Agrège tous les transports : BRT, TER, Cars Rapides, Ndiaga Ndiaye,
Dakar Dem Dikk, Taxis Collectifs, Clandos et plus.

## Stack Technique
- **Frontend** : Next.js 16 (App Router) + Tailwind CSS + TypeScript
- **Base de données** : Supabase (PostgreSQL + Auth + Realtime)
- **Cartographie** : Mapbox GL
- **Paiements** : Wave Sénégal + Orange Money

## Fonctionnalités
- Recherche d'itinéraire multi-modal
- Comparaison de trajets (prix, durée, correspondances)
- Paiement sécurisé mobile
- Abonnements et forfaits
- Profils conducteurs vérifiés
- Interface mobile-first en français

## Lancement
```bash
npm install
npm run dev
```

## Variables d'environnement

Copier `.env.local.example` en `.env.local` et remplir les clés.

