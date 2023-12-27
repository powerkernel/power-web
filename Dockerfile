FROM node:lts-alpine

# install
WORKDIR /app
RUN npm install -g next@latest
COPY package.json .
COPY package-lock.json .
RUN npm ci

# build
COPY . .
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# start
CMD ["npm", "start"]