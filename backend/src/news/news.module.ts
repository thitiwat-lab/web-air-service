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
export class NewsModule implements NestModule {
    public configure(consumer: MiddlewareConsumer){
        consumer.apply(Middleware).forRoutes(
            {path: 'news', method:RequestMethod.GET},
            {path: 'news/:id', method:RequestMethod.GET},
            {path: 'news/upload', method:RequestMethod.POST },
            {path: 'news/:id', method:RequestMethod.PUT},
            {path: 'news/:id', method:RequestMethod.DELETE},
        )
    }
}
