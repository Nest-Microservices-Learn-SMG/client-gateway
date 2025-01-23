import { Logger, Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVICE } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productsMicroserviceHost,
          port: envs.productsMicroservicePort,
        },
      },
    ]),
  ],
})
export class ProductsModule {
  private readonly logger = new Logger(ProductsModule.name);
  constructor() {
    this.logger.log(
      `Products Gateway Listening on ${envs.productsMicroserviceHost}:${envs.productsMicroservicePort}`,
    );
  }
}
