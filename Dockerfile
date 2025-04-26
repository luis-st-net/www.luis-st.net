# Build image with:
#  docker buildx build --load --platform linux/arm64 -t main-web:latest .
# Save image with:
#  docker save -o D:\Programmieren\Docker\Images\Main-Website\main-web-<version>.tar <image>
# Load image with:
#  docker load -i .\main-web-<version>.tar
# Retag image with:
#  docker tag <image> main-web:<version>
# Run image with:
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
