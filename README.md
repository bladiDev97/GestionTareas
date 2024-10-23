
docker run -d --hostname rabbit --name rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=rabbitpw -p 9090:15672 -p 5672:5672 rabbitmq:3-management
