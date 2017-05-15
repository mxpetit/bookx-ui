FROM node:7.2.1
MAINTAINER Maxime PETIT <maximepetit@hotmail.fr>

RUN mkdir -p /opt/app
WORKDIR /tmp
COPY *.json /tmp/

# Install back-end dependencies
RUN npm install
RUN npm install -g bower gulp-cli
RUN apt-get update && apt-get install -y git
RUN cp -a /tmp/node_modules /opt/app/

# Handle ESUDO error
RUN echo '{ "allow_root": true }' > /root/.bowerrc

# Install front-end dependencies
RUN bower install
RUN cp -a /tmp/bower_components /opt/app/

# Get wait-for-it
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /opt/app/
RUN chmod +x /opt/app/wait-for-it.sh

WORKDIR /opt/app
COPY . /opt/app

# Create dist directory
RUN gulp

EXPOSE 3000
