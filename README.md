


## Processo

### Instalações

> docker e dockerSwarm

### Criar volume

> docker volume create -d traefik-certificates

### Criar network

> docker network create -d overlay traefik-public

### Definir Máquina como cluster
> docker swarm init --advertise-addr <IP máquina>
  
### Iniciar Cluster com traefik
> docker stack deploy <traefik> -c cluster-manager-proxy.yml

### Construir imagem do serviço
> docker build -t <authservice> .

### Rodar serviços no cluster

> docker stack deploy <authservice> -c docker-compose.yml



