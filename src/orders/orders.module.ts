import { Logger, Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ORDER_SERVICE } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.ordersMicroserviceHost,
          port: envs.ordersMicroservicePort,
        },
      },
    ]),
  ],
})
export class OrdersModule {
  private readonly logger = new Logger(OrdersModule.name);
  constructor() {
    this.logger.log(
      `Orders Gateway Listening on ${envs.ordersMicroserviceHost}:${envs.ordersMicroservicePort}`,
    );
  }
}
