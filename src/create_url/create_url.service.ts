import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Urls } from 'src/schemas/Urls.schema';
import { ValidDataDto } from './dtos/ValidData.dto';

@Injectable()
export class CreateUrlService {
  constructor(@InjectModel(Urls.name) private urlModel: Model<Urls>) {}
  createUrl(createUrlDto: ValidDataDto) {
    try {
      const newUrl = new this.urlModel(createUrlDto);
      return newUrl.save();
    } catch (error) {
      throw new HttpException('something is wrong with the url', 404);
    }
  }
  findShortUrl(fullUrl: string) {
    return this.urlModel.findOne({ url: fullUrl });
  }
  findFullUrl(shortUrl: string) {
    return this.urlModel.findOne({ shortUrl: shortUrl });
  }
}
