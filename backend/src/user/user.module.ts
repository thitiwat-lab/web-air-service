import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport';

// internal
import {Middleware} from '../auth/auth.middleware'
import { UserService } from './user.service';
import { UserSchema, CollectionName as CollectionUsers } from './user.schema'
import { UserController } from './user.controller'
import {AuthService} from '../auth/auth.service'
import {TokensSchema, CollectionName as Collectiontoken } from '../auth/auth.schema'

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:CollectionUsers,
        schema:UserSchema
      },
      {
        name:Collectiontoken,
        schema:TokensSchema
      },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers:[UserController],
  providers: [UserService,AuthService]
})
export class UserModule implements NestModule {
 public configure(consumer: MiddlewareConsumer){
    consumer
    .apply(Middleware)
    .forRoutes(
      {path: 'user', method:RequestMethod.GET},
      {path: 'user/:id', method:RequestMethod.GET},
      {path: 'user', method:RequestMethod.POST },
      {path: 'user/:id', method:RequestMethod.PUT},
      {path: 'user/:id', method:RequestMethod.DELETE},
      // { path: 'user/updateprofile', method: RequestMethod.PUT },
      { path: 'user/resetpass/:id', method: RequestMethod.PUT },
      {path: 'user/searchone', method:RequestMethod.GET},

      )
  }
}
