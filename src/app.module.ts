import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HueModule } from './hue/hue.module';
import {ConfigModule} from "@nestjs/config"
@Module({
  imports: [HueModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}