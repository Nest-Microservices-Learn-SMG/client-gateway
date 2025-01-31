FROM node:21-alpine3.19

WORKDIR /usr/src/app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json yarn.lock ./

# Instala las dependencias antes de copiar el resto del código
RUN yarn install

# Copia el resto del código
COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]