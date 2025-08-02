FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app


# Copy package files
COPY package.json yarn.lock ./
COPY prisma ./prisma/


# Install dependencies and OpenSSL
RUN apk add --no-cache openssl \
    && yarn install --frozen-lockfile


# Copy source code
COPY . .


# Generate Prisma client (ensure correct binary target)
RUN yarn prisma generate

# Build the application
RUN yarn build

EXPOSE 5001

# Start the application
CMD ["yarn", "start:prod"]
