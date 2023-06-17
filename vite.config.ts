import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Note for the future, plugin-legacy doesn't work for shit so don't try it
// The nullish coallessing operator is not transpiled in the dependencies
// https://github.com/vitejs/vite/blob/v4.0.5/packages/vite/CHANGELOG.md#compatibility
// import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // legacy({
    //   targets: {
    //     safari: '12',
    //   },
    // }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 5173,
    strictPort: true,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: 'safari13',
  },
})
