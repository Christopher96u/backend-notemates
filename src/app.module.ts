import { Module } from '@nestjs/common';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
      ],
      envFilePath: ['.env'],
    }),
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
