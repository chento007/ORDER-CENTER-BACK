import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RoleModule,
    JwtModule
  ],
  controllers: [UserController],
  providers: [
    UsersService,
    JwtService,
  ],
  exports: [UsersService],
})
export class UserModule {}
