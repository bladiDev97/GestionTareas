# Proyecto Sistema de Gestión de Tareas
El proyecto fue creado con 
- node v20.17.0
- npm v10.8.2

## Instalación
- instalar docker
- ejecutar los comandos para correr los contenedores
- ejecutar el script de instalación: 
- Colocar las variables de entorno en los archivos .env creados


### Contenededores
#### Rabbit:
```sh
docker run -d --hostname rabbit --name rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=rabbitpw -p 9090:15672 -p 5672:5672 rabbitmq:3-management
```

##### Postgres:
```sh
docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgrespw -e POSTGRES_DB=postgres -d -p 5432:5432 postgres
```

##### Script de instalación
```sh
sh install.sh
```

## Correr el prograna
Antes de correr el programa se ocupa crear dos bases de datos y las siguientes tablas

#### Base de datos de users
```sql
CREATE DATABASE ms_users
```
#### Base de datos tasks
```sql
CREATE DATABASE ms_users
```

#### comando para correr el api gateway: 
```sh
npm run start:dev api
```

#### comando para correr el ms user: 
```sh
npm run start:dev users
```

#### comando para correr el ms task: 
```sh
npm run start:dev tasks
```

### Swagger:
El proyecto cuenta con un cliente para probar la api, para acceder es: 
```
http://localhost:3000/api
```

