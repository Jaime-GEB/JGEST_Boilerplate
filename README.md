# React + TypeScript + Vite Template (JGest)

Este es un template personalizado de React optimizado para el desarrollo rápido con Material UI, gestión de estado y servicios de API preconfigurados.

## 🚀 Configuración del Proyecto

### 1. Configurar la API
Para que el proyecto se comunique con tu backend, debes configurar la URL base en el archivo `.env`.

Crea o edita el archivo `.env` en la raíz del proyecto:
```env
VITE_APP_API_URL='https://tu-api.com/api'
```

### 2. Instalación y Ejecución
```bash
npm install
npm run dev
```

---

## 🛠️ Servicios y Utilidades

### `ApiService`
Ubicación: `src/services/ApiService.ts`

Un servicio basado en **Axios** para realizar peticiones HTTP de forma sencilla. Ya maneja la captura de errores y los devuelve en un formato consistente.

**Uso:**
```typescript
import { api } from './services/ApiService';

// Ejemplo GET
const data = await api.get<MiTipo>('/endpoint');

// Ejemplo POST
const result = await api.post('/endpoint', { nombre: 'Ejemplo' });
```

### `useNotification` (Hook)
Ubicación: `src/hooks/shared/useNotification.ts`

Permite mostrar alertas (notificaciones) en la interfaz de usuario. Debe usarse dentro del `NotificationProvider`.

**Uso:**
```typescript
import { useNotification } from './hooks/shared/useNotification';

const { showNotification } = useNotification();

// Mostrar mensaje de éxito
showNotification('Operación exitosa', 'success');

// Manejar errores de la API automáticamente
try {
    await api.post(...);
} catch (error) {
    showNotification(error); // Muestra el error formateado por el ApiService
}
```

### `useSetTimezone` (Hook)
Ubicación: `src/hooks/shared/useSetTimezone.ts`

Utilidad para formatear fechas recibidas de la API a la zona horaria local (`Europe/Madrid`).

**Uso:**
```typescript
import useSetTimezone from './hooks/shared/useSetTimezone';

const { setTimezone } = useSetTimezone();
const fechaFormateada = setTimezone('2024-03-12T10:00:00Z');
// Salida: "12/3/2024, 11:00:00" (ajustado a Madrid)
```

---

## 🧩 Componentes Destacados

### `ThemeToggle`
Ubicación: `src/components/main/ThemeSwitch.tsx`

Un componente de interruptor (Switch) estilizado para alternar entre el modo claro y oscuro. Utiliza un store global para persistir la preferencia.

**Uso:**
Simplemente importa y coloca el componente en tu barra de navegación o sidebar:
```tsx
import ThemeToggle from './components/main/ThemeSwitch';

<ThemeToggle />
```

### `MyModal`
Ubicación: `src/components/shared/MyModal.tsx`

Un componente base para crear modales consistentes, con fondo desenfocado y scroll interno.

**Propiedades:**
- `children`: Contenido del modal.
- `minWidth`: Ancho mínimo (por defecto 800px).
- `onClose`: Función que se ejecuta al cerrar o hacer clic fuera.

### `MyPopover`
Ubicación: `src/components/shared/MyPopover.tsx`

Componente para mostrar menús contextuales o popovers flexibles con posicionamiento automático.

---

## 🏗️ Estructura de Carpetas
- `src/components`: Componentes visuales (shared/main).
- `src/hooks`: Lógica reutilizable y hooks personalizados.
- `src/providers`: Proveedores de contexto (Notificaciones, Auth, etc.).
- `src/services`: Llamadas a APIs y servicios externos.
- `src/store`: Gestión de estado global (Zustand/Context).
