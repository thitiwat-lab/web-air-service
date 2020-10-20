import { Module, RequestMethod, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MapsmemberService } from './mapsmember.service';
import { MapsmemberController } from './mapsmember.controller';
import {AuthService} from '../auth/auth.service'
import {UserService} from '../user/user.service'
import {Mapsmember, Collectionmaps} from './mapsmember.schema'
import {UserSchema,CollectionName as CollectionUser} from '../user/user.schema'
import { MongooseModule } from '@nestjs/mongoose';
import {MemberService} from '../member/member.service'
import {MemberSchema, CollectionName as CollectionMember } from '../member/member.schema'
import {Middleware} from '../auth/auth.middleware'
@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Collectionmaps,
        schema:Mapsmember
      },
      {
        name: CollectionUser,
        schema: UserSchema,
      },
      {
        name:CollectionMember,
        schema:MemberSchema
      },
    ])
  ],
  providers: [MapsmemberService, AuthService, UserService, MemberService],
  controllers: [MapsmemberController]
})
export class MapsmemberModule implements NestModule {
  public configure(consumer: MiddlewareConsumer){
    consumer.apply(Middleware).forRoutes(
      {path: 'mapsmember', method:RequestMethod.GET},
      {path: 'mapsmember/searchonce', method:RequestMethod.GET},
      {path: 'mapsmember/:id', method:RequestMethod.GET},
      {path: 'mapsmember', method:RequestMethod.POST },
      {path: 'mapsmember/:id', method:RequestMethod.PUT},
      {path: 'mapsmember/:id', method:RequestMethod.DELETE},
      )
    }
}
