import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

// internal
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import {Middleware} from '../auth/auth.middleware'
import {MemberSchema, CollectionName as CollectionMember} from './member.schema'
import {AuthService} from '../auth/auth.service'
import {UserService} from '../user/user.service'
import {UserSchema,CollectionName as CollectionUser} from '../user/user.schema'
import {Mapsmember, Collectionmaps} from '../mapsmember/mapsmember.schema'
import {MapsmemberService} from '../mapsmember/mapsmember.service'
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:CollectionMember,
        schema:MemberSchema,
      },
      {
        name: CollectionUser,
        schema: UserSchema,
      },
      {
        name:Collectionmaps,
        schema:Mapsmember
      },
    ]),
  ],
  controllers: [MemberController],
  providers: [MemberService, AuthService, UserService, MapsmemberService]
})
export class MemberModule implements NestModule {
  public configure(consumer: MiddlewareConsumer){
    consumer.apply(Middleware).forRoutes(
      {path: 'member', method:RequestMethod.GET},
      {path: 'member/searchone', method:RequestMethod.GET},
      {path: 'member/:id', method:RequestMethod.GET},
      {path: 'member', method:RequestMethod.POST },
      {path: 'member/:id', method:RequestMethod.PUT},
      {path: 'member/map/:id', method:RequestMethod.PUT},
      {path: 'member/:id', method:RequestMethod.DELETE},
    )
  }
}
