
# Login & Register App

Una aplicación de autenticación desarrollada con Ionic Angular y TypeScript que permite a los usuarios registrarse e iniciar sesión con persistencia de datos.

## Características

- Sistema de login y registro con validaciones
- Almacenamiento local con localStorage
- Interfaz moderna con diseño responsive
- JSON Server como backend simulado
- Desarrollado con TypeScript

## Tecnologías

- **Ionic Angular**
- **TypeScript**
- **Angular**
- **JSON Server**
- **CSS3**

## Instalación

**Clonar el repositorio:**
```bash
git clone https://github.com/AndresJPF/login-register.git
cd login-register

```

**Instalar dependencias:**
```bash
npm install
```

## Ejecución

### Desarrollo

**Iniciar Proyecto:**
```bash
npm run start
```

**Abrir en el navegador:**
```
http://localhost:8100
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   ├── login/
│   │   └── register/
│   ├── services/
│   │   └── auth.service.ts
│   └── app-routing.module.ts
db.json
```

## Usuario de Prueba

- **Email:** demo@example.com
- **Contraseña:** 123456

## Configuración

El archivo `db.json` contiene la estructura de datos para JSON Server:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Usuario Demo",
      "email": "demo@example.com",
      "password": "123456",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

## Scripts Disponibles

```bash
npm start          # Inicia servidor de desarrollo
npm run server     # Inicia JSON Server
npm run build      # Build de producción
```

## Funcionalidades

- Validación de campos requeridos
- Verificación de formato de email
- Confirmación de contraseña
- Persistencia de sesión
- Protección de rutas
- Diseño responsive
```
