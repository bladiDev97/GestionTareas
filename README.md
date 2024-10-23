# Proyecto Sistema de Gestión de Tareas

## Instalación
- instalar docker
- ejecutar los siguientes contenedores

Rabbit:
```sh
docker run -d --hostname rabbit --name rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=rabbitpw -p 9090:15672 -p 5672:5672 rabbitmq:3-management
```

- ejecutar el siguiente script: 
```sh
sh install.sh
```

- Colocar las variables de entorno en el archivo .env creado