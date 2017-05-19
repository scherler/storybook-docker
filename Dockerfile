FROM node:slim
RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook

RUN npm install

CMD npm start

EXPOSE 9009
