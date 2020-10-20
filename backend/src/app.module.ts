import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// internal
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { NewsModule } from './news/news.module';
import { AirconditioningModule } from './airconditioning/airconditioning.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'
import { ReporticomeModule } from './reporticome/reporticome.module';
import { MemberModule } from './member/member.module';
import { PromotionModule } from './promotion/promotion.module';
import { BannerModule } from './banner/banner.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import {} from './news/news.controller'
import { MapsmemberModule } from './mapsmember/mapsmember.module';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MulterModule.register({
      dest: './files',
    }),
    MulterModule.register({
      dest: './filesnews',
    }),
    MongooseModule.forRoot('mongodb://localhost/test'),
    ReservationsModule,
    NewsModule,
    AirconditioningModule,
    UserModule,
    AuthModule,
    ReporticomeModule,
    MemberModule,
    PromotionModule,
    BannerModule,
    MapsmemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
