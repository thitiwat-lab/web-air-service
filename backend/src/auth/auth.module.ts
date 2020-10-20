import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport';


import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserService } from '../user/user.service'
import {UserSchema, CollectionName as CollectionUsers } from '../user/user.schema'
import {JwtStrategy} from './jwt.strategy'
import {airconditioningSchema, CollectionName as CollectionAir} from '../airconditioning/airconditioning.schema'
import {AirconditioningService} from '../airconditioning/airconditioning.service'
import { ReservationsSchema,CollectionName as Collectionreservation } from '../reservations/reservations.schema';
import {ReservationsService} from '../reservations/reservations.service'
import {ReporticomeService} from '../reporticome/reporticome.service'
import {ReporticomeSchema, CollectionName as Collectionreporticome} from '../reporticome/reporticome.schema'
import {MemberService} from '../member/member.service'
import {MemberSchema, CollectionName as CollectionMember} from '../member/member.schema'
import { BannerService } from '../banner/banner.service';
import {BannerSchema, CollectionName as CollectionBanner} from '../banner/banner.schema'
import {Mapsmember, Collectionmaps} from '../mapsmember/mapsmember.schema'
import {MapsmemberService} from '../mapsmember/mapsmember.service'

@Module({
    imports: [
        MongooseModule.forFeature([
          {
            name: Collectionmaps,
            schema:Mapsmember
          },
          {
            name: CollectionUsers,
            schema: UserSchema,
          },
          {
            name: CollectionAir,
            schema: airconditioningSchema,
          },
          {
            name: Collectionreservation,
            schema: ReservationsSchema,
          },
          {
            name:Collectionreporticome,
            schema:ReporticomeSchema,
          },
          {
            name:CollectionMember,
            schema:MemberSchema,
          },
          {
            name:CollectionBanner,
            schema:BannerSchema
          },
        ]),
        PassportModule.register({ defaultStrategy: 'jwt', session: false })
      ],
      providers: [AuthService,UserService,JwtStrategy, BannerService, AirconditioningService, ReservationsService, ReporticomeService, MemberService, MapsmemberService],
      controllers: [AuthController],
})
export class AuthModule {}
