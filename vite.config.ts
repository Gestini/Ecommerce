import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 4000, // O el puerto que prefieras
    open: true, // Abre el navegador automáticamente
  },
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida no interfiera con el directorio de desarrollo
  }
});
