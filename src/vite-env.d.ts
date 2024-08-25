/// <reference types="vite/client" />

/** @see {docs} https://vitejs.dev/guide/env-and-mode#intellisense-for-typescript */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_API_URL: string;
}
