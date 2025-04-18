FROM selenium/standalone-firefox:134.0-20250323 
WORKDIR /app
COPY . /app

RUN npm install

CMD ["npx", "wdio", "./configs/wdio.firefox.conf.ts"]