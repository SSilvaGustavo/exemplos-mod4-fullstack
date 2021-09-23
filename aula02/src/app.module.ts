import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProductModule],
})
export class AppModule {}
