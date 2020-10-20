import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';
import {PromotionShema, CollectionName as CollectionPromotion} from './promotion.schema'
import {UserSchema,CollectionName as CollectionUser} from '../user/user.schema'
import {AuthService} from '../auth/auth.service'
import {UserService} from '../user/user.service'
import { Middleware } from 'src/auth/auth.middleware';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:CollectionPromotion,
        schema:PromotionShema,
      },
      {
        name:CollectionUser,
        schema:UserSchema,
      },
    ])
  ],
  controllers: [PromotionController],
  providers: [PromotionService, AuthService, UserService]
})
export class PromotionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer){
    consumer.apply(Middleware).forRoutes(
      {path: 'promotion', method:RequestMethod.GET},
      {path: 'promotion/:id', method:RequestMethod.GET},
      {path: 'promotion', method:RequestMethod.POST },
      {path: 'promotion/:id', method:RequestMethod.PUT},
      {path: 'promotion/:id', method:RequestMethod.DELETE},
    )
  }
}

