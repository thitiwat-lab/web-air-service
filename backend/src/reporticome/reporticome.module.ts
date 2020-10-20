import { Module,  NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

// internal
import {ReporticomeController}  from './reporticome.controller'
import {ReporticomeService} from './reporticome.service';
import {Middleware} from  '../auth/auth.middleware'
import {ReporticomeSchema, CollectionName as Collectionreporticome} from './reporticome.schema'
import {AuthService} from '../auth/auth.service'
import {UserService} from '../user/user.service'
import {UserSchema,CollectionName as CollectionUser} from '../user/user.schema'

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:Collectionreporticome,
                schema:ReporticomeSchema,
            },
            {
                name:CollectionUser,
                schema:UserSchema,
            },
        ])
    ],
    controllers:[ReporticomeController],
    providers:[ReporticomeService, AuthService, UserService]
})
export class ReporticomeModule implements NestModule {
    public configure(consumer: MiddlewareConsumer){
        consumer.apply(Middleware).forRoutes(
            {path: 'reportincome', method:RequestMethod.GET},
            {path: 'reportincome/:id', method:RequestMethod.GET},
            {path: 'reportincome', method:RequestMethod.POST },
            {path: 'reportincome/:id', method:RequestMethod.PUT},
            {path: 'reportincome/updatestatus/:id', method:RequestMethod.PUT},
            {path: 'reportincome/:id', method:RequestMethod.DELETE},
        )
    }
}
