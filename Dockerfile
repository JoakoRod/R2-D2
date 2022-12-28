FROM node:14.16.1-slim

ENV USER=R2_D2

# install python and make
RUN apt-get update && \
	apt-get install -y python3 build-essential && \
	apt-get purge -y --auto-remove

# create R2_D2 user
RUN groupadd -r ${USER} && \
	useradd --create-home --home /home/R2_D2 -r -g ${USER} ${USER}

# set up volume and user
USER ${USER}
WORKDIR /home/R2_D2

COPY --chown=${USER}:${USER} package*.json ./
RUN npm install
VOLUME [ "/home/R2_D2" ]

COPY --chown=${USER}:${USER}  . .

ENTRYPOINT [ "node", "index.js" ]
