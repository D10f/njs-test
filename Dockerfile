FROM node:20-bookworm-slim AS build
WORKDIR /tmp
COPY nginx/njs/ .
RUN npm init -y && \
    npm install @babel/core @babel/cli @babel/preset-env babel-loader webpack webpack-cli browserify ajv && \
    printf "global.ajv = require('ajv');" | npx browserify -d -o browserify.js - && \
    npx webpack --config webpack.config.js && \
    cat validate.js dist/wp_out.js > ajv-js.js

FROM nginx:1.23 AS prod
COPY --from=build /tmp/ajv-js.js /etc/nginx
CMD nginx -v > /dev/stderr && njs /etc/nginx/ajv-js.js

