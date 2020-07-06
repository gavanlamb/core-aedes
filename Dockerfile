FROM node:13
WORKDIR /app
COPY src/ /app/
RUN npm install
RUN npm run compile

CMD npm start