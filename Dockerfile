# Build image on host:
#  docker buildx build --load --platform linux/arm64 -t main-web:<version> .
#  docker save -o D:\Programmieren\Docker\Images\Main-Website\main-web-<version>.tar main-web
#  docker load -i ./main-web-<version>.tar
#  docker run -d -p 3000:3000 --name main-web main-web:<version>
# Build image on remote:
#  docker build -t main-web:<version> .
#  docker run -d -p 3000:3000 --name main-web main-web:<version>
# Update the container:
#  docker stop main-web
#  docker rm main-web
#  docker run -d -p 3000:3000 --name main-web main-web:<version>
FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build
RUN npm prune --omit=dev

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["node", "server.js"]
