FROM node:19.4.0

RUN mkdir /books-frontend
COPY . /books-frontend
WORKDIR /books-frontend
RUN npm install

# Change the backend proxy URL for Reach dev server
RUN sed -i 's/localhost/backend/g' package.json

CMD npm run start
