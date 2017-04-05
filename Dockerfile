FROM node:7.2.1
MAINTAINER Maxime PETIT <maximepetit@hotmail.fr>

WORKDIR /tmp
COPY *.json /tmp/

# Install back-end dependencies
RUN npm install
RUN npm install -g bower gulp-cli
RUN apt-get update && apt-get install -y git

# Handle ESUDO error
RUN echo '{ "allow_root": true }' > /root/.bowerrc

# Install front-end dependencies
RUN bower install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
RUN cp -a /tmp/bower_components /opt/app/

WORKDIR /opt/app
COPY . /opt/app

# Create dist directory
RUN gulp

EXPOSE 3000
ENTRYPOINT ["node", "dist/index.js"]
