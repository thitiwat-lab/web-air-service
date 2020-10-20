import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import{airconditioningSchema, CollectionName as CollectionAir}from './airconditioning.schema'
import{AirconditioningController} from './airconditioning.controller'
import {AirconditioningService} from './airconditioning.service'
import {Middleware} from '../auth/auth.middleware'
import {AuthService} from '../auth/auth.service'
import {UserService} from '../user/user.service'
import {UserSchema,CollectionName as CollectionUsers} from '../user/user.schema'

@Module({
    imports:[
        MongooseModule.forFeature([
            {           
                 name:CollectionAir,
                schema:airconditioningSchema
            },
            {           
                name:CollectionUsers,
                schema:UserSchema
           },
        ]),
    ],
    controllers:[AirconditioningController],
    providers:[AirconditioningService, AuthService, UserService],
})
export class AirconditioningModule implements NestModule {
    public configure(consumer: MiddlewareConsumer){
        consumer
        .apply(Middleware)
        .forRoutes(
          {path: 'airconditioning', method:RequestMethod.GET},
          {path: 'airconditioning/:id', method:RequestMethod.GET},
          {path: 'airconditioning', method:RequestMethod.POST },
          {path: 'airconditioning/:id', method:RequestMethod.PUT},
          {path: 'airconditioning/:id', method:RequestMethod.DELETE},
          )
      }
    }
