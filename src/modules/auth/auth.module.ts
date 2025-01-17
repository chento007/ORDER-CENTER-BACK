import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([User]),
    ConfigModule,
    JwtModule,
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule { }
