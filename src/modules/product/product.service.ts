import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product)
    private readonly productRepository: ProductRepository) { }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find({
            relations: ['category'],
        });
    }

    async create({ name, categoryId, description, price, stockQty, thumbnail }: CreateProductDto): Promise<boolean> {

        const product = await this.productRepository.save({ name, categoryId, description, price, stockQty, thumbnail });
        
        return !!product;
    }

    async findByCategoryId(categoryId: number): Promise<Product[]> {
        return await this.productRepository.find({
            relations: ['category'],
            where:{
                categoryId
            }
        });
    }
}