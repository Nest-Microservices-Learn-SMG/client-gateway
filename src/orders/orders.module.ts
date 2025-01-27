import { Logger, Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { envs } from 'src/config';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [NatsModule],
})
export class OrdersModule {
  private readonly logger = new Logger(OrdersModule.name);
  constructor() {
    this.logger.log(
      `Orders Gateway Listening on ${envs.ordersMicroserviceHost}:${envs.ordersMicroservicePort}`,
    );
  }
}
