FROM oven/bun:latest

WORKDIR /usr/src/app

COPY package.json ./
RUN bun install
COPY . .
# RUN bun db:migrate
# RUN bun db:seed

EXPOSE 3000

CMD ["bun", "dev"]
