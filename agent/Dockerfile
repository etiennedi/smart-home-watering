FROM node:alpine

WORKDIR /src
RUN printenv
RUN apk --update add tzdata
RUN cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime
RUN echo "Europe/Berlin" > /etc/timezone
RUN apk del tzdata

ADD . /src
RUN npm install

CMD node .
