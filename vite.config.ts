import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/

export default (config: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(config.mode!, process.cwd()) };
  return defineConfig({
    plugins: [react(), svgr()],
    server: {
      port: 3000,
      proxy: {
        '^/fallback/.*': {
          target: process.env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, ''),
          secure: false
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  });
};
