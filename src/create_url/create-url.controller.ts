import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidUrlDto } from './dtos/validUrl.dto';
import { CreateUrlService } from './create_url.service';

@Controller('create-url')
export class CreateUrlController {
  constructor(private createUrlService: CreateUrlService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUrl(@Body() urlDataDto: ValidUrlDto) {
    const rand = this.revisedRandId();
    // try {
    return this.createUrlService.createUrl({
      ...urlDataDto,
      shortUrl: rand,
    });
    // } catch (error) {
    //   throw new HttpException('something is wrong with the url', 404);
    // }
  }
  @Get('get_short_url/:full_url')
  async getShortUrl(@Param('full_url') full_url: string) {
    const shortUrl = await this.createUrlService.findShortUrl(full_url);
    if (!shortUrl) throw new HttpException('no url found', 404);
    return shortUrl;
  }
  @Get('get_full_url/:short_url')
  async getFullUrl(@Param('short_url') short_url: string) {
    const longUrl = await this.createUrlService.findFullUrl(short_url);
    if (!longUrl) throw new HttpException('no url found', 404);
    return longUrl;
  }

  revisedRandId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10);
  }
}
