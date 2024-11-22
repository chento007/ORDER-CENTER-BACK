import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryRepository } from "./product.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Paginated } from "nestjs-paginate";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: CategoryRepository
    ) { }


    public async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    public async create({ name , description }: CreateCategoryDto): Promise<Category> {

        return await this.categoryRepository.save({name,description});
    }
}