FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN if [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install; \
    fi

RUN npm run build

CMD ["node", "dist/main.js"]
