# Build image on host:
#  docker buildx build --load --platform linux/arm64 -t main-web:<version> .
#  docker save -o D:\Programmieren\Docker\Images\Main-Website\main-web-<version>.tar main-web
#  docker load -i ./main-web-<version>.tar
# Build image on remote:
#  docker build -t main-web:<version> .
# Update the container:
#  docker stop main-web
#  docker rm main-web
#  docker run -d -p 3000:3000 --restart unless-stopped --name main-web main-web:<version>

# With docker compose:
#  docker compose up -d --build
#  docker compose down

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
