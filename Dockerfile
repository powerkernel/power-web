FROM node:16-alpine

# install
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

# build
COPY . .
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# start
CMD ["npm", "start"]