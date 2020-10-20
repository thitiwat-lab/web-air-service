import { Module, NestModule,  MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// internal
import { ReservationsSchema,CollectionName as Collectionreservation } from './reservations.schema';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import {Middleware} from '../auth/auth.middleware'
import {AuthService} from '../auth/auth.service'
import {UserService} from '../user/user.service'
import {UserSchema,CollectionName as CollectionUsers} from '../user/user.schema'


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Collectionreservation,
        schema: ReservationsSchema,
      },
      {
        name: CollectionUsers,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, AuthService, UserService],
})
export class ReservationsModule implements NestModule{
  public configure(consumer:MiddlewareConsumer){
    consumer
    .apply(Middleware)
    .forRoutes(
      {path: 'reservations', method:RequestMethod.GET},
      {path: 'reservations/:id', method:RequestMethod.GET},
      {path: 'reservations/searchone', method:RequestMethod.GET},
      {path: 'reservations', method:RequestMethod.POST },
      {path: 'reservations/:id', method:RequestMethod.PUT},
      {path: 'reservations/updatestatus/:id', method:RequestMethod.PUT},
      {path: 'reservations/:id', method:RequestMethod.DELETE},
    )
  }
}
