import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// internal
import {NewsSchema} from './news.schema'
import {NewsService} from './news.service'
import {NewsController}from './news.controller'
import {UserService} from '../user/user.service'
import {UserSchema,CollectionName as CollectionUser} from '../user/user.schema'
import {Middleware} from  '../auth/auth.middleware'
import {AuthService} from '../auth/auth.service'


@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:'news',
                schema:NewsSchema,
            },
            {
                name:CollectionUser,
                schema:UserSchema,
            },
        ]),
    ],
    controllers:[NewsController],
    providers:[NewsService, AuthService, UserService],
})
export class NewsModule {}
