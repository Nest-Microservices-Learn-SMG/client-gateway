## Cliente Gateway

El cliente es el punto de comunicación entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones de los clientes, procesarlas y enviarlas a los servicios correspondientes. Además, recibe las respuestas de los servicios y las envía a los clientes.

## Dev

1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`
3. Crear un archivo `.env` basado en el archivo `.env.template`.
4. Tener levantados los microservicios que se van a consumir.
5. Levantar el proyecto con `npm run start:dev`

## Nats Server

```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
