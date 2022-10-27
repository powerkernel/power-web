FROM node:lts-alpine

# install
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

# build
COPY . .
RUN npm run build

# start
CMD ["npm", "start"]