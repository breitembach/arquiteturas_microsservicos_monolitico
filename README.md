


## Processo

### Instalações

> docker e dockerSwarm

### Criar volume

> docker volume create -d traefik-certificates

### Criar network

> docker network create -d overlay traefik-public

### Start Cluster
> docker stack deploy traefik -c cluster-manager-proxy.yml

### build image service
docker build -t authservice . --no-cache && docker service update authservice_authservice --force

### run services in cluster

docker stack deploy authservice -c docker-compose.yml



