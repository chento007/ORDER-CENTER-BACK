import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { CategoryController } from '../category/category.controller';
import { ProductController } from './product.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        ConfigModule,
    ],
    controllers: [ProductController],
    providers: [ProductService,],
    exports: [ProductService],
})
export class ProductModule { }
