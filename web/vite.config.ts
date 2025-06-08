import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    port: 3000
  }
});

// export default defineConfig({
//   plugins: [react()],
//   base: import.meta.env.VITE_BASE_PATH || "/f8-k13-final-Project-ELearning",
// })s