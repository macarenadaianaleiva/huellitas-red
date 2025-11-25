# Huellitas Red – MVP de Gestión de Servicios para Mascotas

Huellitas Red es una aplicación web que permite a los usuarios registrarse, iniciar sesión y reservar servicios para sus mascotas, como paseos, guardería o cuidado e higiene.  
Este proyecto se desarrolló como trabajo integrador final de PP3, utilizando arquitectura en capas, desarrollo full stack y despliegue en la nube.

## Tecnologías utilizadas

### Frontend (Vercel)
- React con Vite
- React Router
- CSS Modules
- Fetch API
- LocalStorage para persistencia del JWT
- Despliegue en Vercel

### Backend (Railway)
- Node.js + Express
- Autenticación con JWT
- Hasheo de contraseñas con bcryptjs
- CORS
- Despliegue en Railway

### Base de datos (Railway)
- PostgreSQL
- Prisma ORM
- Migraciones automáticas

## Arquitectura del Proyecto

El proyecto utiliza una arquitectura Cliente-Servidor, organizada en tres capas:

### Frontend (Vercel)
Encargado de la interfaz de usuario, navegación, componentes y llamadas HTTP hacia el backend.

### Backend (Railway)
Estructurado en:
- Controller: recibe solicitudes HTTP
- Service: contiene la lógica de negocio
- Repository (Prisma): interacción con la base de datos

### Base de Datos
- PostgreSQL administrado desde Railway
- Prisma como ORM para modelos, consultas y migraciones

Esta estructura permite escalabilidad, mantenibilidad y facilidad de depuración.

## Instalación y ejecución local

### 1. Clonar repositorio

```bash
git clone https://github.com/usuario/huellitas-red.git
cd huellitas-red

Backend
2. Entrar a la carpeta
cd backend

3. Instalar dependencias
npm install

4. Crear archivo .env
DATABASE_URL="postgresql://TU_URL_DE_RAILWAY"
JWT_SECRET="CLAVE_SECRETA"
PORT=5000

5. Ejecutar servidor
npm run dev

El backend quedará disponible en:
http://localhost:5000

Frontend
6. Entrar a la carpeta
cd frontend

7. Instalar dependencias
npm install

8. Crear archivo .env
VITE_API_URL="http://localhost:5000"

9. Ejecutar servidor
npm run dev

El frontend quedará disponible en:

http://localhost:5173

```
## Funcionalidades Principales

### Autenticación
- Registro de usuario
- Inicio de sesión con JWT
- Protección de rutas en el frontend

### Reservas
- Crear reserva
- Ver mis reservas
- Modal informativo por servicio
- Comunicación con backend vía API REST

### Interfaz
- UI moderna
- Pantalla de éxito
- Manejo de errores y loaders

## Despliegue
- Frontend: Vercel
- Backend: Railway
- Base de datos: PostgreSQL (Railway)
