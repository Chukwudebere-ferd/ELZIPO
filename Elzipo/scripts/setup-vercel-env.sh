#!/usr/bin/env bash
# Convenience script to create Vercel Secrets and map them to project environment
# Usage: ./scripts/setup-vercel-env.sh .env.production
# Requirements: `vercel` CLI installed and you are logged in (run `vercel login`)

set -euo pipefail

ENV_FILE=${1:-.env.production}

if [ ! -f "$ENV_FILE" ]; then
  echo "Env file not found: $ENV_FILE"
  exit 1
fi

# Load environment values
# shellcheck disable=SC1090
source "$ENV_FILE"

echo "Adding Vercel secrets (existing secrets will be skipped)..."

add_secret_if() {
  NAME=$1
  VALUE=$2
  if [ -z "$VALUE" ]; then
    echo "Skipping $NAME (empty)"
    return
  fi
  # Add secret (if already exists, the command may fail; ignore failures)
  vercel secrets add "$NAME" "$VALUE" 2>/dev/null || true
  # Map the secret into production env
  vercel env add "$3" production "@$NAME" 2>/dev/null || true
}

add_secret_if firebase_api_key "$VITE_FIREBASE_API_KEY" VITE_FIREBASE_API_KEY
add_secret_if firebase_auth_domain "$VITE_FIREBASE_AUTH_DOMAIN" VITE_FIREBASE_AUTH_DOMAIN
add_secret_if firebase_project_id "$VITE_FIREBASE_PROJECT_ID" VITE_FIREBASE_PROJECT_ID
add_secret_if firebase_storage_bucket "$VITE_FIREBASE_STORAGE_BUCKET" VITE_FIREBASE_STORAGE_BUCKET
add_secret_if firebase_messaging_sender_id "$VITE_FIREBASE_MESSAGING_SENDER_ID" VITE_FIREBASE_MESSAGING_SENDER_ID
add_secret_if firebase_app_id "$VITE_FIREBASE_APP_ID" VITE_FIREBASE_APP_ID

# Cloudinary
add_secret_if cloudinary_cloud_name "$VITE_CLOUDINARY_CLOUD_NAME" VITE_CLOUDINARY_CLOUD_NAME
add_secret_if cloudinary_upload_preset "$VITE_CLOUDINARY_UPLOAD_PRESET" VITE_CLOUDINARY_UPLOAD_PRESET

echo "Done. If you prefer, you can add/update secrets from the Vercel dashboard instead."
