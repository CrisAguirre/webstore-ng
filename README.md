# Cliente Angular - Productos (Vercel)

## ⚠️ PASO PREVIO OBLIGATORIO

Antes de desplegar en Vercel, actualiza la URL del servidor en:

**`src/environments/environment.prod.ts`**

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://TU-SERVIDOR.railway.app/api/productos/'  // ← Cambia esto
};
```

## Despliegue en Vercel

1. Sube este repo a GitHub
2. En vercel.com → "New Project" → importa el repositorio
3. **Build Command**: `npm run vercel-build`
4. **Output Directory**: `dist/cliente`
5. Deploy!

## Desarrollo Local

```bash
npm install
npm start
# App en http://localhost:4200
```
