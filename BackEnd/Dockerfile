# specify the node base image with your desired version node:<version>
FROM node:14

ENV logLevel=debug

#ENV NODE_ENV=production
ENV NODE_ENV=dev

COPY package*.json ./

# Create Directory for the Container
WORKDIR /src/server
# Bundle app source
COPY . .

# Copy the files we need to our new Directory
ADD . /src/server
# RUN npm install
RUN npm i --only=prod -f
RUN npm run build

# replace this with your application's default port
EXPOSE 4080
CMD [ "node", "dist/server.js" ]
