import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // plugins: [react({
  //   fastRefresh: process.env.NODE_ENV !== 'test'
  // })],
  // base: '/test-react-route/'
  // const isDevEnv = mode === 'development';
  
  return {
    plugins: [
        react(),
    ],
    base: '/react-routes-test/'
  }
})
