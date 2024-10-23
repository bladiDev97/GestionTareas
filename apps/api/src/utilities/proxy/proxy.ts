import { Queues } from "@app/shared";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class ProxyService {
  constructor(private readonly config: ConfigService) { }

  /** Proxy of user */
  clientProxyUser(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: Queues.User,
      }
    })
  }

  /** Proxy of Task */
  clientProxyTask(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: Queues.Task,
      }
    })
  }

}