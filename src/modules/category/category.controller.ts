import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { Roles } from "src/common/decorator/roles.decorator";
import { AppRoles } from "src/common/enum/roles.enum";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/common/guard/roles.guard";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller('api/categories')
@ApiTags('categories')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    @Roles([AppRoles.EMPLOYEE, AppRoles.ADMIN, AppRoles.MANAGER])
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    public async getAll(): Promise<Category[]> {
        return await this.categoryService.findAll();
    }

    @Post()
    @Roles([AppRoles.EMPLOYEE, AppRoles.ADMIN, AppRoles.MANAGER])
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    public async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.create(createCategoryDto);
    }
}