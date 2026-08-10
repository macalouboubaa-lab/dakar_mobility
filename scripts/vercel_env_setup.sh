#!/usr/bin/env bash
set -euo pipefail

# Script d'automatisation pour ajouter des variables d'environnement sur Vercel
# Nécessite : VERCEL_TOKEN (Personal Token) et VERCEL_PROJECT_ID (ID du projet Vercel)
# Usage exemple :
# VERCEL_TOKEN=xxxx VERCEL_PROJECT_ID=proj_abc NEXT_PUBLIC_SUPABASE_URL=... \
# NEXT_PUBLIC_SUPABASE_ANON_KEY=... ./scripts/vercel_env_setup.sh

if [ -z "${VERCEL_TOKEN-}" ] || [ -z "${VERCEL_PROJECT_ID-}" ]; then
  echo "ERREUR: VERCEL_TOKEN et VERCEL_PROJECT_ID doivent être fournis."
  echo "Exemple: VERCEL_TOKEN=xxx VERCEL_PROJECT_ID=proj_abc NEXT_PUBLIC_SUPABASE_URL=... ./scripts/vercel_env_setup.sh"
  exit 2
fi

declare -A vars
vars[NEXT_PUBLIC_SUPABASE_URL]="${NEXT_PUBLIC_SUPABASE_URL-}"
vars[NEXT_PUBLIC_SUPABASE_ANON_KEY]="${NEXT_PUBLIC_SUPABASE_ANON_KEY-}"

API_BASE="https://api.vercel.com"
PROJECT_ID="$VERCEL_PROJECT_ID"
TOKEN="$VERCEL_TOKEN"

for key in "${!vars[@]}"; do
  value="${vars[$key]}"
  if [ -z "$value" ]; then
    echo "Saut: $key n'est pas défini dans l'environnement. Définissez-le ou mettez-le dans la commande." >&2
    continue
  fi

  echo "Ajout de la variable $key sur le projet $PROJECT_ID..."

  body=$(jq -n --arg k "$key" --arg v "$value" '{key:$k, value:$v, target:["production","preview","development"], type:"encrypted"}')

  resp=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/v9/projects/$PROJECT_ID/env" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$body")

  http=$(echo "$resp" | tail -n1)
  out=$(echo "$resp" | sed '$d')

  if [ "$http" = "200" ] || [ "$http" = "201" ]; then
    echo "OK: $key ajouté."
  else
    echo "ERREUR ($http) lors de l'ajout de $key:" >&2
    echo "$out" >&2
  fi
done

echo "Terminé. Si des variables ont été sautées, relancez la commande en exportant les valeurs correspondantes."
