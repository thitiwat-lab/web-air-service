import { CollectionName } from './../auth/Token.schema';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

// internal
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import {BannerSchema, CollectionName as CollectionBanner} from './banner.schema'
import {UserService} from '../user/user.service'
import {UserSchema,CollectionName as CollectionUser} from '../user/user.schema'
import {Middleware} from  '../auth/auth.middleware'
import {AuthService} from '../auth/auth.service'
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports:[
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'pulic'),
    //   exclude: ['/api*'],
    // }),
    // MulterModule.register({
    //   dest: './files',
    // }),
    MongooseModule.forFeature([
      {
        name:CollectionBanner,
        schema:BannerSchema
      },
      {
        name:CollectionUser,
        schema:UserSchema,
    },
    ]),
  ],
  providers: [BannerService , AuthService, UserService],
  controllers: [BannerController]
})
export class BannerModule {}
