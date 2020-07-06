FROM node:13
WORKDIR /app
COPY src/ /app/
RUN npm install
RUN npm run compile

EXPOSE 1883
CMD npm start