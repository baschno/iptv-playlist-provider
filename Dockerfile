FROM node:21.0.0-alpine3.18
EXPOSE 8111
COPY iptv.js .
CMD ["node", "iptv.js"]
