import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUrlController } from './create-url.controller';
import { Urls, UrlsSchema } from 'src/schemas/Urls.schema';
import { CreateUrlService } from './create_url.service';

@Module({
  controllers: [CreateUrlController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Urls.name,
        schema: UrlsSchema,
      },
    ]),
  ],
  providers: [CreateUrlService],
})
export class CreateUrlModule {}
