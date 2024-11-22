import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeormConfig } from './common/config';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { JwtStrategy } from './common/strategy/jwt.strategy';
import { RolesGuard } from './common/guard/roles.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FileModule } from './modules/file/file.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeormConfig,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule,
    JwtModule.register({
      secret: 'cdw7232hidwuy23232wefewfs1213',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    FileModule,
    CategoryModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },

  ],
  exports: [JwtStrategy, PassportModule],

})
export class AppModule { }
