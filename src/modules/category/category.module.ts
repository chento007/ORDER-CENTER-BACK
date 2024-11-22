import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Category]),
        ConfigModule,
    ],
    controllers: [CategoryController],
    providers: [CategoryService],
    exports: [CategoryService], 
})
export class CategoryModule {}
