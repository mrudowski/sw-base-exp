import react from '@vitejs/plugin-react-swc';
import {defineConfig, loadEnv} from 'vite';
import {checker} from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      !env.VITEST
        ? checker({
            typescript: true,
            eslint: {
              lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            },
          })
        : undefined,
    ],
  };
});
