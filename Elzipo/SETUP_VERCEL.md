# Vercel setup for environment variables and secrets 🔐

Follow these steps to add Firebase and Cloudinary secrets to your Vercel project. You can do this via the Vercel Dashboard (UI) or with the Vercel CLI (recommended for automation).

Option A — Using Vercel Dashboard (UI):

1. Open your project on vercel.com.
2. Go to Settings → Environment Variables.
3. For each environment variable in `.env.production` (example below), add it with the **Production** environment.
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_STORAGE_BUCKET
   - VITE_FIREBASE_MESSAGING_SENDER_ID
   - VITE_FIREBASE_APP_ID
   - VITE_CLOUDINARY_CLOUD_NAME
   - VITE_CLOUDINARY_UPLOAD_PRESET

Option B — Using Vercel CLI (automated):

1. Install the Vercel CLI if you haven't: `npm i -g vercel` and run `vercel login`.
2. Create a local `.env.production` with the production values (don't commit this file).
3. Run the helper script to add secrets and map them:
   ```bash
   ./scripts/setup-vercel-env.sh .env.production
   ```
   This will add named secrets (e.g., `firebase_api_key`) and map them to the Vite env names.

Notes:

- The project contains `vercel.json` that expects Vercel secrets named like `firebase_api_key` — ensure those secrets exist. If you see the Vercel error "references Secret 'firebase_api_key' which does not exist", run the script above or create the secret in the dashboard.
- Do not commit `.env.production` or any plaintext secrets to Git.
