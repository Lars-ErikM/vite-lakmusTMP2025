import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-lakmusTMP2025/", // "/"//  Når reponavn settes inn forsvinner logoen (antar hjem ikke lenger er siden som vises)
})
