import { Module } from '@nestjs/common';
import { CreateUrlModule } from './create_url/create_url.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CreateUrlModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/short_urls'),
    CreateUrlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
